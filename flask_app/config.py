import binascii
import os

def configuration(environment=None):
    if environment == "production":
        # 本番環境
        config = {
            "HOST": "0.0.0.0",
            "PORT": "80",
            "DEBUG" : False,
            "TESTING" : False, 
            "SECRET_KEY" : "HARD_TO_GUESS_STRINGS", # 推測不可能な文字列
            "SESSION_COOKIE_HTTPONLY": True, # 「HTTP only」と指定されたクッキーへはJavaScriptからアクセスできないように、ブラウザ側で処理する
            "SESSION_COOKIE_SECURE": False, # HTTPS環境下でのみCookieが有効か否か
            "PERMANENT_SESSION_LIFETIME": 604800, # 7日間
            "SESSION_REFRESH_EACH_REQUEST" : True # リクエストごとにSession情報をブラウザに送信するか否か
        } 
        return config

    elif environment == "develop":
        # テスト環境
        config = {
            "HOST": "0.0.0.0",
            "PORT": "80",
            "DEBUG" : True,
            "TESTING" : True, 
            "SECRET_KEY" : "HARD_TO_GUESS_STRINGS", # 推測不可能な文字列
            "SESSION_COOKIE_HTTPONLY": False, #  「HTTP only」と指定されたクッキーへはJavaScriptからアクセスできないように、ブラウザ側で処理する
            "SESSION_COOKIE_SECURE": False, # HTTPS環境下でのみCookieが有効か否か
            "PERMANENT_SESSION_LIFETIME": 604800, # 7日間
            "SESSION_REFRESH_EACH_REQUEST" : True # リクエストごとにSession情報をブラウザに送信するか否か
        } 
    
    else:
        # その他の環境
        config = {
            "HOST": "127.0.0.1",
            "PORT": "5001",
            "DEBUG" : True,
            "TESTING" : True, 
            "SECRET_KEY" : "HARD_TO_GUESS_STRINGS", # 推測不可能な文字列
            "SESSION_COOKIE_HTTPONLY": False, #  「HTTP only」と指定されたクッキーへはJavaScriptからアクセスできないように、ブラウザ側で処理する
            "SESSION_COOKIE_SECURE": False, # HTTPS環境下でのみCookieが有効か否か
            "PERMANENT_SESSION_LIFETIME": 604800, # 7日間
            "SESSION_REFRESH_EACH_REQUEST" : True # リクエストごとにSession情報をブラウザに送信するか否か
        } 
    
    return config

# DATABASE URL
DATABASE_CONFIG = {
    "ENGINE" : "mysql+pymysql",
    "USER" : "flask_app",
    "PASSWORD" : "flask_app",
    "HOST": "database",
    "DATABASE_NAME" : "flask_app_database",
    "CHARSET" : "utf8"
}

SQLALCHEMY_DATABASE_URI = "{}://{}:{}@{}/{}?charset={}".format(
    DATABASE_CONFIG["ENGINE"], 
    DATABASE_CONFIG["USER"], 
    DATABASE_CONFIG["PASSWORD"], 
    DATABASE_CONFIG["HOST"], 
    DATABASE_CONFIG["DATABASE_NAME"], 
    DATABASE_CONFIG["CHARSET"]
)

# Model Files Directory Name
MODEL_DIR = "models"