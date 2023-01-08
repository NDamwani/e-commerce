from django.http import JsonResponse

# Create your views here.

def home(requests):
    return JsonResponse({'info':'DJango React Course','name':"nikhil"})