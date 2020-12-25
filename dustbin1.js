class dustbin{
        constructor(x,y)
        {
            this.x=x;
            this.y=y;
            //creating the width , height and thickness
            this.dustbinWidth=200;
            this.dustbinHeight=213;
            this.wallThickness=20;
            
            this.image=loadImage("dustbin.png")
    
            //bottom body
            this.bottomBody=Bodies.rectangle(this.x, this.y, 
                this.dustbinWidth, 
                this.wallThickness,
                 {isStatic:true})
    
            //left body
            this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,
                 this.y-this.dustbinHeight/2, 
                 this.wallThickness, 
                 this.dustbinHeight,
                  {isStatic:true})
            //right body
            this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,
                 this.y-this.dustbinHeight/2, 
                 this.wallThickness, 
                 this.dustbinHeight, 
                 {isStatic:true})
            
            World.add(world, this.bottomBody)
            World.add(world, this.leftWallBody)
            World.add(world, this.rightWallBody);
    
        }
        display()
        {
            //temporary variables created for all the sides	
                var posBottom=this.bottomBody.position;
                var posLeft=this.leftWallBody.position;
                var posRight=this.rightWallBody.position;
            //for left side	
                push()
                translate(posLeft.x, posLeft.y);
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                rotate(this.angle)
                pop()
            //for right side
                push()
                translate(posRight.x, posRight.y);
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                rotate(-1*this.angle)
                pop()
            //for bottom side and adding the image here
                push()
                translate(posBottom.x, posBottom.y+10);
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                imageMode(CENTER);
                image(this.image, 0,-this.dustbinHeight/2,
                    this.dustbinWidth, this.dustbinHeight)
                pop()
                
        }
    
    }


