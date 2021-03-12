from django.db import models


#in  fahrenheit 
class Temperature(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    temperature = models.DecimalField(max_digits= 6,  decimal_places=2)

    class Meta:
        ordering = ['-created']

#in Percentage 
class Humidity(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    humidity = models.DecimalField(max_digits= 6,  decimal_places=2)

    class Meta:
        ordering = ['-created']

#in kPa
class Pressure(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    pressure = models.DecimalField(max_digits= 6,  decimal_places=2)

    class Meta:
        ordering = ['-created']


# Create your models here.
