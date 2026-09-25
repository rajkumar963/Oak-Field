import { ImageResponse } from 'next/og';
export const runtime='nodejs';
export const alt='Oak Field Research — Rooted in curiosity. Driven by evidence.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#f5f6ee',color:'#204f3b',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'70px 85px',justifyContent:'space-between'}}><div style={{fontSize:23,letterSpacing:5}}>OAK FIELD RESEARCH</div><div style={{display:'flex',flexDirection:'column',fontSize:76,fontFamily:'serif',letterSpacing:-3}}><span>Rooted in curiosity.</span><span>Driven by evidence.</span></div><div style={{fontSize:16,letterSpacing:4,borderTop:'1px solid #b7c4ae',paddingTop:25}}>QUANTITATIVE · SYSTEMATIC · PRECISE</div></div>,size)}
