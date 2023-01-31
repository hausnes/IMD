from galactic import GalacticUnicorn
import time
from picographics import PicoGraphics, DISPLAY_GALACTIC_UNICORN as DISPLAY
import random

gu = GalacticUnicorn()
graphics = PicoGraphics(DISPLAY)

width = GalacticUnicorn.WIDTH
print("Bredde:",width,"piksler")
height = GalacticUnicorn.HEIGHT
print("Høgde:",height,"piksler")

gu.set_brightness(1)

# Koden lyser opp en enkel piksel (graphics.pixel bestemmer hvilken),
# lyser i 2 sekunder og slår seg av.
graphics.set_pen(graphics.create_pen(int(30), int(50), int(100))) # de tre verdiene er r, g, b
graphics.pixel(4, 4) # hvilken piksel
gu.update(graphics)
time.sleep(2)
gu.clear()

# Løkke som går gjennom alle pikslene
for x in range(height):
    for y in range(width):
        #graphics.set_pen(graphics.create_pen(255,0,0)) # rød farge på alle
        graphics.set_pen(graphics.create_pen(random.randint(0,255), random.randint(0,255), random.randint(0,255))) # tilfeldige farger for hver gang
        graphics.pixel(y, x)
        gu.update(graphics)

        time.sleep(0.01)

time.sleep(5)
gu.clear()