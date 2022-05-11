class mystery(object):
    def __init__(this, length, values):
        this.values = [0]*length
        for value in values:
            this.values[value] += 1

    def __str__(this):
        return "length {:d}: {}".format(len(this.values), this.values)

    def __add__(this, value):
        myst = mystery(len(this.values), [])
        myst.values = this.values.copy()
        myst.values[value] += 1
        return myst
