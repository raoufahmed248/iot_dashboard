from django.urls import path
from sensorData import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('temperatures/', views.TemperatureList.as_view()),
    path('temperaturesLimited/<int:amount>', views.TemperatureListLimited.as_view()),
    path('temperatures/<int:pk>', views.TemperatureDetail.as_view()),
    path('humidities/', views.HumidityList.as_view()),
    path('humiditiesLimited/<int:amount>', views.HumidityListLimited.as_view()),
    
    path('humidities/<int:pk>', views.HumidityDetail.as_view()),
    path('pressures/', views.PressureList.as_view()),
    path('pressuresLimited/<int:amount>', views.PressureListLimited.as_view()),
    path('pressures/<int:pk>', views.PressureDetail.as_view()),

    path('locations/', views.LocationList.as_view()),
    path('locationsLimited/<int:amount>', views.LocationListLimited.as_view()),
    path('locations/<int:pk>', views.LocationDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
