from django.urls import path
from .views import details, login_api, submit

urlpatterns = [
    #path('api/submit/', save_object, name='save_object'),
    path('api/details/',details),
    path('api/login/',login_api),
    path('api/submit/',submit)
]
