import { Component, OnInit } from '@angular/core';
import * as $ from '../../node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    $(document).ready(function(){
        $('.menu').click(function(){
            $('ul').toggleClass('active');
        })
    })
   
  }
  title = 'orthofisioterapia';
}
