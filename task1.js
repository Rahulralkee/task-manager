angular.module('taskManagerApp', [])
    .controller('TaskController', function () {
        var vm = this;
        vm.tasks = [];
        vm.newTask = '';

        vm.addTask = function () {
            if (vm.newTask.trim() !== '') {
                vm.tasks.push({ name: vm.newTask });
                vm.newTask = '';
            }
        };

        vm.editTask = function (task) {
            var index = vm.tasks.indexOf(task);
            var newName = prompt('Edit task:', task.name);
            if (newName !== null) {
                vm.tasks[index].name = newName;
            }
        };

        vm.deleteTask = function (task) {
            var index = vm.tasks.indexOf(task);
            vm.tasks.splice(index, 1);
        };
    });
