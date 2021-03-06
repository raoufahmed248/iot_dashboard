from rest_framework import serializers
from sensorData.models import Temperature, Pressure, Humidity, Location

class temperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Temperature
        fields = ['created','temperature', 'id']

class humiditySerializer(serializers.ModelSerializer):
    class Meta:
        model = Humidity
        fields = ['created','humidity', 'id']

class pressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pressure
        fields = ['created','pressure', 'id']

class locationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['created','lng','lat', 'id']
