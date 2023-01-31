# Basic lydtest med Galactic Unicorn, kjelde: https://gist.github.com/jamescarruthers/7fb5a72346e21fb6d9d8865f049ac6df

from galactic import GalacticUnicorn, Channel

gu = GalacticUnicorn()

# setup a channel
beep = gu.synth_channel(0)

# configure the synth on that channel
beep.configure(waveforms=Channel.SINE,
                      frequency=1000,
                      attack=0.0,
                      decay=0.1,
                      sustain=0.0,
                      release=0.0,
                      volume=1.0)

# start the synth — you only need to do this once
gu.play_synth()

# then whenever you want to trigger a beep
beep.trigger_attack()

'''
Tilleggskommentar:
If you want to use release — then you need to also do a .trigger_release() sometime after the attack. 
For instance - if you had it attached to button then you'd do the attack when the button is pressed, and then the release when it's released.

'''