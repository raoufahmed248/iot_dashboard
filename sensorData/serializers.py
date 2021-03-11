from rest_framework import serializers
from sensorData.models import TempData, LANGUAGE_CHOICES, STYLE_CHOICES

class temperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = TempData
        fields = ['created','temperature']