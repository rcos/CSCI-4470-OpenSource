/* $Id: cconvAYUV.c 71027 2018-02-15 14:33:48Z vboxsync $ */
#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect uSrcTex;
void vboxCConvApplyAYUV(vec4 color);
void vboxCConv()
{
    vec2 srcCoord = vec2(gl_TexCoord[0]);
    vec4 color = texture2DRect(uSrcTex, srcCoord);
    vboxCConvApplyAYUV(color);
}
