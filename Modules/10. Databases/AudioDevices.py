class AudioDevice:
    def __init__(self, manufacturer, device):
        self.manufacturer = manufacturer
        self.device = device
        
class MP3Player(AudioDevice):
    def __init__(self, manufacturer, device, file_format):
        AudioDevice.__init__(self, manufacturer, device)
        self.file_format = file_format
    
class RecordPlayer(AudioDevice):
    def __init__(self, manufacturer, device, speed):
        AudioDevice.__init__(self, manufacturer, device)
        self.speed = speed
        