# description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.
And this components only for Mobile Platform made by angular 4 , if you search in the network ,you will find not have components for  Mobile Platform used
by angular 4 almost,so I make some components when I have sometime . If you want see the H5 pages , please clone the project : https://github.com/lance-li/components.git

## Adding tanke

 - Install  tanke

```bash
npm install tanke --save
```
 - the ways of import

```bash
import { IndependentComponentsModule } from 'tanke';

@NgModule({
  imports: [ IndependentComponentsModule ,]
})
export class AppModule(){}
```

- open `.angular-cli.json` and insert a new entry into the styles array

```json
 "styles": [
   "../node_modules/tanke/assets/scss/tankestyle.scss",
   "styles.scss",
 ],
```
 Now only support scss , I will transform to css later! If you want this , please translate your project to support scss.

   - if you start a new project please code

   ```bash
   ng new sassy-project --style=scss
   ```
   - or translate project please code
   ```bash
   ng set defaults.styleExt scss
   ```
   - then open your .angular-cli.json and change

   ```bash
    "styles": [
        "styles.css" // "styles.scss"
    ]
   ```
## components-name
  
 -  SlidetoggleComponent

```bash
 <app-table-driction [tableName]="tableName" [tableStyle]="tableStyle" (positionCode)="getPositionCode($event)"></app-table-driction>

  @Input tableName  <array>标签数组

  @Output positionCode  <number>传出点击标签位置

  @Input tableStyle? = {
            lineHeight ?: "1rem",
            fontSize ?: "0.35rem",
            color ?: "#000",
            underColor ?: "#000"
          };

 ```

 - TableDrictionComponent

```bash
 <app-slidetoggle [(actionName)]="actionName" [listName]="listName"></app-slidetoggle>

    @Input @Output  actionName <string>

    @Input listName  <array>

```

 - TimeSelectComponent

```bash
  <app-time-select [dateNum]="27" [(actionName)]="timeActionName" (selectedValue)="getTimeValue($event)"></app-time-select>
   
   @Input dateNum  <number>标签数组
     
   @Input @Output  actionName <string>
   
   @Output  selectedValue  
```

 - LayerComponent

```bash
  <app-layer [(actionName)]="layerActionName" [waringName]="waringName"></app-layer>

  @Input @Output  actionName <string>

  @Input waringName  <string>
```