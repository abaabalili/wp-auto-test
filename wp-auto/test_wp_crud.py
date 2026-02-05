# test_wp_crud.py
import pytest, requests, json, base64

URL = "http://localhost:8080/wp-json/wp/v2"
USER = "anna"
PASS = "cxTK 4dQy Mcxb yezC 10RG Een7"          # 阶段 0 生成的应用密码
CRED = base64.b64encode(f"{USER}:{PASS}".encode()).decode()
HEADERS = {
    "Authorization": f"Basic {CRED}",
    "Content-Type": "application/json"
}

@pytest.mark.order(1)          # 先跑
def test_create_post():
    headers = {
        "Authorization": f"Basic {CRED}",
        "Content-Type": "application/json"
    }
    payload = {"title": "auto test", "content": "hello api", "status": "publish"}
    r = requests.post(f"{URL}/posts", headers=HEADERS, data=json.dumps(payload))
    assert r.status_code == 201
    data = r.json()
    assert data["title"]["rendered"] == "auto test"
    global POST_ID
    POST_ID = r.json()["id"]
    print("新建文章 ID:", data["id"])

# ---------- 阶段2：XSS 注入 + 过滤验证 ----------
PAYLOADS = [
    "<script>alert(1)</script>",
    "<img src=x onerror=alert(2)>",
    "javascript:alert(3)"
]

@pytest.mark.order(2)          # 后跑
@pytest.mark.parametrize("payload", PAYLOADS)
def test_xss_inject_and_filter(payload):
    # 1. 注入评论
    data = {
        "post": POST_ID,
        "content": f"nice post {payload}",
        "author_name": "attacker",
        "author_email": "a@a.com"
    }
    r = requests.post(f"{URL}/comments", headers=HEADERS, json=data)
    assert r.status_code == 201

    # 2. 取回评论，断言 XSS 被过滤
    r2 = requests.get(f"{URL}/comments?post={POST_ID}")
    assert r2.status_code == 200
    assert payload not in r2.text          # 被转义或过滤即通过