import React,{useEffect} from 'react'
import * as THREE from 'three';
const ThreeSkybox =() =>{
    useEffect(()=>{
    init()
    },[])
    const init =() =>{
          // 创建一个场景，它将包含所有元素，如对象，相机和灯光。
    let scene = new THREE.Scene();
    let container = document.getElementById('threeBox');

    // 创建一个相机，定义我们能看到的位置。
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // 创建渲染并设置大小和阴影。
    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xFFFFFF));
    renderer.setSize(window.innerWidth-180, window.innerHeight);
    renderer.shadowMap.enabled = true;
        
    }
    return (
        <>
        <div id="threeBox"></div>
        </>
    )
}

export default ThreeSkybox