import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  allownewuser = false;
  serverCreation = 'No Server Created Yet!';
  constructor() {
    setTimeout(() => {
      this.allownewuser = true;
    }, 3000);
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreation = 'Server Created';
  }
}
