from flask import Flask,request,Blueprint,redirect,jsonify
from app.db import get_connection

auth = Blueprint("auth",__name__)
def get_user_by_moodle_id(moodle_id,password):
    conn=get_connection()
    cursor=conn.cursor(dictionary=True)
    cursor.execute(
        "SELECT id,password FROM Users WHERE id=%s AND password = %s",(moodle_id,password)
    )
    user=cursor.fetchone()
    conn.close()
    return user

@auth.route("/login",methods=["POST"])
def login ():
    data=request.get_json()
    if not data:
        return jsonify(
            {
                "success":False,
                "message": "data not recived"
            }
        ),400
    moodle_id= data.get("moodle_id", "")
    password=data.get("password", "")
    
    if not moodle_id or not password:
        return jsonify(
            {
                "success":False,
                "message":"missing fields"
            }
        ),400
    
    if moodle_id=="28106191" and password=="28106191@APSHAH":
        return jsonify(
            {
                "success":True,
                "message":"admin login",
                "role":"admin"
            }
        ),200
    
    user=get_user_by_moodle_id(moodle_id,password)
    if not user :
        return jsonify(
            {
                "success":False,
                "message":"invalid credientials"
            }
        ),401
    
    return jsonify(
            {
                "success":True,
                "message":"correct credientials",
                "role":"user"
            }
        ),200
       
    


