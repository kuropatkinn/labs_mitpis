interface IWorkingGit {
   gitClone: () => string;
   gitCheckout: () => string;
   gitPull: () => string;
   gitAdd: () => string;
   gitCommit: () => string;
   gitPush: () => string;
}

export class WorkingGit implements IWorkingGit {
   gitClone(): string {
      return "git clone - Создание локальной копии удаленного репозитория";
   }

   gitCheckout(): string {
      return "git checkout - Переключение между ветками";
   }

   gitPull(): string {
      return "git pull - Обновление рабочей копию из удалённого репозитория";
   }

   gitAdd(): string {
      return "git add - Добавление изменений из рабочей директории";
   }

   gitCommit(): string {
      return "git commit - Фиксирование внесённые изменения с сообщением";
   }

   gitPush(): string {
      return "git push - Отправление изменений в удалённый репозиторий";
   }
}

export class DeveloperWorked {
   private gitInstance: WorkingGit;

   constructor(gitInstanceOption: WorkingGit) {
      this.gitInstance = gitInstanceOption;
   }

   startWork() {
      return [
         this.gitInstance.gitClone(),
         this.gitInstance.gitCheckout(),
         this.gitInstance.gitPull(),
      ];
   }

   endWork() {
      return [
         this.gitInstance.gitAdd(),
         this.gitInstance.gitCommit(),
         this.gitInstance.gitPush(),
      ];
   }
}
