export class PostModel{
  votes: number;
  link: string;
  title: string;

  constructor(title: string, link: string, votes?: number) {
    this.votes = votes || 0;
    this.title= title;
    this.link = link;
  }

  voteUp(): void{
    this.votes +=1;
  }

  voteDown(): void{
    this.votes -=1;
  }
}
