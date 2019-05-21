import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../utility/notification.service'
import { ToastrService } from 'ngx-toastr';
import {NotyfService} from 'ng-notyf';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  private type:string;
  private notifyService:NotificationService;
  
  constructor(private toastr:ToastrService, private notyf:NotyfService) { 
  }

  ngOnInit() {

    this.type = 'toastr';
    this.notifyService = new NotificationService();
    this.notifyService.info = 'Mensaje Info';
    this.notifyService.error = 'Mensaje Error';

  }

  showToaster(message:string){

    if(this.type == 'toastr'){
      if(message == 'info')
        this.toastr.success(this.notifyService.info);
      else if(message == 'error')
        this.toastr.error(this.notifyService.error);
    }
    else if(this.type == 'notyf'){
      if(message == 'info')
        this.notyf.success(this.notifyService.info);
      else if(message == 'error')
        this.notyf.error(this.notifyService.error);
    }

  }

  onClickSubmit(data){

    if(data.successMessage.length > 0)
      this.notifyService.info = data.successMessage;
    
    if(data.errorMessage.length > 0)
      this.notifyService.error = data.errorMessage;
  }

  onClickNotification(type:string){

    this.type = type;

  }
}
