import os
from dotenv import load_dotenv

def load_env():
    """
    .evnファイルの読み込み\n
    このメソッドの実行以降は、メインプロセスにおいて\n
    \n
    VALUE = os.getenv('KEY')\n
    \n
    のように環境変数にアクセスできる\n
    """
    BASEDIR = os.path.abspath(os.path.dirname(__file__))
    load_dotenv(os.path.join(BASEDIR, '.env'))