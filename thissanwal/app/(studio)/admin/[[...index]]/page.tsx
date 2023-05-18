"use client";

import config from '@/sanity.config'
import {NextStudio} from 'next-sanity/studio'

export default function Adminpage(){
    return <NextStudio config ={config}/>
}