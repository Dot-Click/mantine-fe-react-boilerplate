# Installed UI library:

Mantine UI 6.0.21 - Somehow 7.1.2 is not competible with js but it is with ts.

In this boilerplate we're using scss. Make sure you have some basic knowledge of scss and & why we use it or otherwise you are good to go with css.
Note only compiled css file will be imported, not the sccs or sass files.
Please make sure you have Live Sass Compiler installed in your vs code,
and never forget to start Watch Sass when you're coding scss or sass otherwise it won't compile into css file.

# Pakages that have been installed in this boilerplate are:

1. Redux
2. React-Redux
3. Redux-Thunk
4. React-Apex-Charts
5. Mantine-Datatable
6. Redux-Devtools-Extension
7. Dayjs
8. Embla-Carousel
9. Mantine-Hooks
10. React-Icons
11. Emotion


# DOs & DON'Ts.

# Naming Conention.

Please follow best naming convention. 
    PasalCase for naming components
    camelCase for naming css/scss files
    camelCase for naming functions & custom hooks files
    camelCase for naming functions files

## DOs
Use best practices to code.
Keep your folder structure organized.
Make folders for pages / component who fall in same category.
Your code must be readable.
Please indent your code.
Have prettier installed in your vs code.
Press shft + alt + f key to indent or prettify your code.
Remove or comment all console logs after you are done debug an issue.
Make use of layouts and react-router-dom's outlet component for nested routes and similar looking layouts in the UI.
You code custom css, bootstrap css or you can use tailwind for customization in mantine.

## DON'Ts
Don't install any other UI library along with Mantine (Like React-Bootstrap or Chakra or AntD or any other React UI Library) cause it may impact performace and raise some conflicts.
Try not to use !important in css.
Don't use mantine's auto-generated css classes for references or customization. They change when you make a build.
Don't set vs code on auto-save.
Don't keep any unnecessary console logs, comments or any unused piece of code.