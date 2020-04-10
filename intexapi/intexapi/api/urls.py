from api import views
from django.urls import path


urlpatterns = [
    path('PredictiveAPI/', views.PredictiveAPI.as_view()),
    path('QualityAPI/', views.QualityAPI.as_view()),
    path('campaign/', views.CampaignList.as_view()),
    path('campaign/<str:pk>/', views.CampaignDetails.as_view()),
    path('donation/', views.DonationList.as_view()),
    path('donation/<str:pk>/', views.DonationDetails.as_view()),
    path('update/', views.UpdateList.as_view()),
    path('update/<str:pk>/', views.UpdateDetails.as_view()),
]
