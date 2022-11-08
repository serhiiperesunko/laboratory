import * as THREE from 'three'

class PlayWithThree {

    constructor(props){

        this.canvas = document.querySelector(props?.canvas)
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });

        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))

        // CUBE
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.cube );

        // bind
        this.render = this.render.bind(this)
        this.resize = this.resize.bind(this)

        // actions
        this.resize()
        this.render()

        window.addEventListener('dblclick', () => {
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

                if(!fullscreenElement){
                    if(canvas.requestFullscreen){
                        canvas.requestFullscreen()
                    } else if(canvas.webkitRequestFullscreen){
                        canvas.webkitRequestFullscreen()
                    }
                } else {
                    if(document.exitFullscreen){
                        document.exitFullscreen()
                    } else if(document.webkitExitFullscreen){
                        document.webkitExitFullscreen()
                    }
                }
        })
    }


    resize(){
        window.addEventListener("resize", () => {    
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
        })
    }

    render(){   
        requestAnimationFrame( this.render );

        this.camera.position.z = 5;

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    
        this.renderer.render( this.scene, this.camera );
    }
}

new PlayWithThree({
    canvas: "#canvas"
})


