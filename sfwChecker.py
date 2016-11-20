from clarifai.rest import ClarifaiApp
app = ClarifaiApp()
model = app.models.get('NSFWBlock')
#model.train()
def isSFW(link):
    nsfw_data =  model.predict_by_url(link)['outputs'][0]['data']['concepts']
    if nsfw_data[0]['name'] == 'safe': return True
    else: return False
