import { NgModule } from '@angular/core';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserProfileHeaderComponent } from './components/user-profile-header/user-profile-header.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { TrainersListPageComponent } from './pages/trainers-list-page/trainers-list-page.component';
import { ChooseTrainerDialogComponent } from './components/dialogs/choose-trainer-dialog/choose-trainer-dialog.component';
import { TrainerProfileHeaderComponent } from './components/trainer-profile-header/trainer-profile-header.component';
import { TrainerMessagesComponent } from './components/trainer-messages/trainer-messages.component';
import { MessageDialogComponent } from './components/dialogs/message-dialog/message-dialog.component';
import { NewMessageComponent } from './components/dialogs/new-message/new-message.component';
import { WorkoutPlansPageComponent } from './pages/workout-plans-page/workout-plans-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UpdateButtonComponent } from './components/update-button/update-button.component';
import { AddWorkoutLogDialogComponent } from './components/dialogs/add-workout-log-dialog/add-workout-log-dialog.component';
import { PremiumGatewayPageComponent } from './pages/premium-gateway-page/premium-gateway-page.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRoutingModule } from './user-routing.module';
import { NutritionistsListPageComponent } from './pages/nutritionists-list-page/nutritionists-list-page.component';

@NgModule({
  declarations: [
    UserHomePageComponent,
    UserProfileHeaderComponent,
    ExerciseListComponent,
    TrainersListPageComponent,
    ChooseTrainerDialogComponent,
    TrainerProfileHeaderComponent,
    TrainerMessagesComponent,
    MessageDialogComponent,
    NewMessageComponent,
    WorkoutPlansPageComponent,
    DashboardPageComponent,
    UpdateButtonComponent,
    AddWorkoutLogDialogComponent,
    PremiumGatewayPageComponent,
    NutritionistsListPageComponent,
    
  ],
  imports: [
    SharedModule,
    MatSidenavModule,
    // BrowserAnimationsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
