/* $Id: splitBGRA.c 71027 2018-02-15 14:33:48Z vboxsync $ */
float vboxSplitBGRA(vec4 color, float coord)
{
    int pix = int(coord);
    float part = coord - float(pix);
    if(part < 0.25)
        return color.b;
    if(part < 0.5)
        return color.g;
    if(part < 0.75)
        return color.r;
    return color.a;
}
