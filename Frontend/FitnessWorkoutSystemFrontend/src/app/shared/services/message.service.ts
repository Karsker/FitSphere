import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Message } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private api: ApiService) { }

  /**
   * Fetches all the messages sent and received by a user
   *
   * @param {string} userId - id of the user
   * @return {*}  {Observable<Object>} - Array of messages as an observable
   * @memberof MessageService
   */
  getAllMessages(userId: string): Observable<Object> {
    return this.api.get(`/message/${userId}`);
  }

  /**
   * Sends a new message between two users
   *
   * @param {string} fromId - The id of the sender
   * @param {string} fromName - The name of the receiver
   * @param {string} toId  - The id of the reveiver
   * @param {string} toName - The name of the reciever
   * @param {string} relation - The relation (Trainer, Nutritionist)
   * @param {string} content - The message content
   * @return {*} 
   * @memberof MessageService
   */
  sendMessage(fromId: string, fromName: string, toId: string, toName: string, relation: string, content: string) {
    let newMessage:Message = {
      fromId,
      fromName,
      toId,
      toName,
      relation,
      content
    };

    return this.api.request('POST', '/message', JSON.stringify(newMessage));
  }
}
