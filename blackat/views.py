from django.shortcuts import render
from .models import *
from PIL.Image import new
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View, FormView, TemplateView, DetailView, ListView
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm, AdminPasswordChangeForm
from django.views.generic.edit import CreateView, UpdateView
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.views.generic.edit import FormMixin
from django.template.loader import render_to_string
from django.urls import reverse_lazy
from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
from django.conf import settings
from django.core.files import File
import datetime
import base64
import json 
import random
import base64
from io import BytesIO
import base64
from django.core.files import File
import boto3
import urllib.request
import requests
from django.core.files.base import ContentFile
from os.path import basename
from urllib.parse import urlencode
from django.http.response import  HttpResponseRedirect




# Create your views here.
#Homepage Landing Page
def Homepage(request):

    return render(request, "index.html")
