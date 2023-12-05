//A class should have only one reason to change.

/*the goal of the single responsibility principles is to isolate your classes and your classes
should have one and only on function or resposibility.so you need to break down your classes 
into smaller and manageable ones*/

class BlogPost{

    constructor(private title:string, private content:string){
        this.title = title;
        this.content = content;
    }

    createPost( title:string, content:string){
        this.title = title;
        this.content = content;

    }
    updatePost(title:string, content:string){
        this.title = title;
        this.content = content;

    }
    deletePost(){
        this.title = '';
        this.content = '';

    }
    getTitle(){
        return this.title;
    }
    getContent(){
        return this.content;
    }

}



class BlogPostDisplay{
    constructor(public blogPost: BlogPost){
        this.blogPost = blogPost;
    }
    display(){
        return console.log(this.blogPost.getTitle(),this.blogPost.getContent());
    }
}

const blogPost:BlogPost = new BlogPost('The Cat','A Cat that used to a sammurai!');
//create post.
blogPost.createPost('the dog',"A Dog that used to be a ninja!");
//update post.
blogPost.updatePost('The duck',"A Duck that used to be a Shogun")
let displayPost = new BlogPostDisplay(blogPost);
//display post.
displayPost.display();
//delete post.
blogPost.deletePost();
