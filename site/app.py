#!/usr/bin/python3
#-*- coding: utf-8 -*-
from flask import Flask, render_template, send_from_directory, request
from os.path import join

from os import getcwd
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from forms import *
from flask_bootstrap import Bootstrap
from sassutils.wsgi import SassMiddleware
app = Flask(__name__)
# --CONFIG--
import config
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{join(getcwd(), "app.db")}'
debug = True
theme = "dark"
# --END CONFIG--

db = SQLAlchemy(app)
migrate = Migrate(app, db, compare_type=True)
login = LoginManager(app)
bootstrap = Bootstrap(app)
app.wsgi_app = SassMiddleware(app.wsgi_app, {__name__: ('styles/scss', 'styles/css','/styles/css')})
import models
@app.route('/oh_dear_what_a_blunder_ive_made')
def uhohspeghettios():
  # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  # @                CAUTION:                    @ 
  # @  This page is meant for if the server is   @
  # @  well, unable to serve things, it's very   @
  # @  important that no other files are         @
  # @  included here and that there aren't       @
  # @  any things that may prohibit the page     @
  # @  from loading.                             @
  # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  # *phew* I finally got that ASCII warning sign right
  
  return '''
  <!DOCTYPE html>
  <html>
  <body>
  <h1>This is the hall of broken code that you will likely never see.</h1>
  <p>This is temporary!</p>
  <p>If you've stumbled upon this page, someone broke the server code lol</p>
  <p>Enjoy!</p>
  </body>
  </html>
  '''
if debug:
  @app.route('/thirdparty/spectrum/vars/dist/<css>')
  def spectrum_vars(css):
    return send_from_directory('thirdparty/spectrum/vars/dist', css)
  @app.route('/thirdparty/spectrum/page/dist/<css>')
  def spectrum_page(css):
    return send_from_directory('thirdparty/spectrum/page/dist', css)
  @app.route('/thirdparty/spectrum/typography/dist/<css>')
  def spectrum_typography(css):
    return send_from_directory('thirdparty/spectrum/typography/dist', css)
  @app.route('/thirdparty/spectrum/icon/dist/<css>')
  def spectrum_icon(css):
    return send_from_directory('thirdparty/spectrum/icon/dist', css)
  @app.route('/thirdparty/spectrum/button/dist/<css>')
  def spectrum_button(css):
    return send_from_directory('thirdparty/spectrum/button/dist', css)
  @app.route('/thirdparty/spectrum/actionbutton/<css>')
  def spectrum_actionbutton(css):
    print('action button')
    return send_from_directory('thirdparty/spectrum/actionbutton/dist', css)
  @app.route('/styles/<_>/<css>')
  def styles(_, css):
    return send_from_directory('styles', css)
  @app.route('/apis/<_>/<_2>/<css>')
  def apis(_, _2, css):
    return send_from_directory('styles', css)
  @app.route('/assets/images/<asset>')
  def assets(asset):
    return send_from_directory('assets/images',asset)
@app.route('/')
@app.route("/home")
def home():
  page_theme = request.args.get("theme", theme)
  return render_template("index.html", theme=page_theme)
@app.route('/services')
def services():
  page_theme = request.args.get("theme", theme)
  return render_template("services.html", theme=page_theme)
@app.route('/faq')
def faq():
  page_theme = request.args.get("theme", theme)
  return render_template("faq.html", theme=page_theme)
@app.route('/signup', methods=['GET','POST'])
def signup():
  form = SignupForm()
  if form.validate_on_submit():
    u = models.User(username=form.username)
    u.set_pw_hash(form.password)
    db.session.commit(u)
    return redirect('/home')
  return render_template("signup.html",form=form, theme=theme)

@login.user_loader
def load_user(id):
  return models.User.get(id)
if __name__ == '__main__':
  app.run(debug=debug)
