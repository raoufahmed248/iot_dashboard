from django.urls import path
from sensorData import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('temperatures/', views.TemperatureList.as_view()),
    path('temperatures/<int:pk>', views.TemperatureDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
