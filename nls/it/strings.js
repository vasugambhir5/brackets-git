/*jshint maxlen:false */

define({
    // ACTION:                             "Action",
    ACTION:                                "Azione",
    // ADD_ENDLINE_TO_THE_END_OF_FILE:     "Add endline at the end of file",
    ADD_ENDLINE_TO_THE_END_OF_FILE:        "Aggiungi fine riga alla fine del file",
    // ADD_TO_GITIGNORE:                   "Add to .gitignore",
    ADD_TO_GITIGNORE:                      "Aggiungi al .gitignore",
    // ADVANCED_FEATURES_WARNING:          "This features are not recommended for basic Git users as they may cause you to lose code that has been already commited if used inproperly. Use with caution.",
    ADVANCED_FEATURES_WARNING:             "Queste funzioni non sono consigliate per utenti di Git a livello base in quanto possono causare perdite di codice su di cui è già stato effettuato il commit se usate impropriamente. Usale con cautela.",
    // AMEND_COMMIT:                       "Amend last commit",
    AMEND_COMMIT:                          "Correggi l’ultimo commit",
    // AMEND_COMMIT_FORBIDDEN:             "Cannot amend commit when there are no unpushed commits",
    AMEND_COMMIT_FORBIDDEN:                "Impossibile correggere un commit quando non ce ne sono di non inviati",
    // _ANOTHER_BRANCH:                    "another branch",
    _ANOTHER_BRANCH:                       "un altro branch",
    // AUTHOR:                             "Author",
    AUTHOR:                                "Autore",
    // AUTHORS_OF:                         "Authors of",
    AUTHORS_OF:                            "Autori di",
    // AVATAR_TYPE:                        "Avatar type",
    AVATAR_TYPE:                           "Tipo di avatar",
    // BASH_NOT_AVAILABLE:                 "Bash is not available or properly configured",
    BASH_NOT_AVAILABLE:                    "Bash non è disponibile o non è correttamente configurato",
    // BASIC_CONFIGURATION:                "Basic configuration",
    BASIC_CONFIGURATION:                   "Configurazione di base",
    // BLACK_WHITE_AVATAR:                 "Black and white avatar",
    BLACK_WHITE_AVATAR:                    "Avatar nero e bianco",
    // BRACKETS_GIT_ERROR:                 "Brackets Git encountered an error\u2026",
    BRACKETS_GIT_ERROR:                    "Brackets Git ha rilevato un errore\u2026",
    // BRANCH_NAME:                        "Branch name",
    BRANCH_NAME:                           "Nome branch",
    // BUTTON_CANCEL:                      "Cancel",
    BUTTON_CANCEL:                         "Annulla",
    // BUTTON_CHANGELOG:                   "Show changelog",
    BUTTON_CHANGELOG:                      "Mostra il changelog",
    // BUTTON_CHECKOUT_COMMIT:             "Checkout",
    BUTTON_CHECKOUT_COMMIT:                "Checkout",
    // BUTTON_CLONE:                       "Clone",
    BUTTON_CLONE:                          "Clona",
    // BUTTON_CLOSE:                       "Close",
    BUTTON_CLOSE:                          "Chiudi",
    // BUTTON_COMMIT:                      "Commit",
    BUTTON_COMMIT:                         "Commit",
    // BUTTON_DEFAULTS:                    "Restore defaults",
    BUTTON_DEFAULTS:                       "Ripristina predefiniti",
    // BUTTON_FIND_CONFLICTS:              "Find conflicts\u2026",
    BUTTON_FIND_CONFLICTS:                 "Trova conflitti\u2026",
    // BUTTON_INIT:                        "Init",
    BUTTON_INIT:                           "Inizializza",
    // BUTTON_MERGE_ABORT:                 "Abort merge",
    BUTTON_MERGE_ABORT:                    "Annulla merge",
    // BUTTON_OK:                          "OK",
    BUTTON_OK:                             "OK",
    // BUTTON_REBASE_ABORT:                "Abort",
    BUTTON_REBASE_ABORT:                   "Annulla",
    // BUTTON_REBASE_CONTINUE:             "Continue rebase",
    BUTTON_REBASE_CONTINUE:                "Continua il rebase",
    // BUTTON_REBASE_SKIP:                 "Skip",
    BUTTON_REBASE_SKIP:                    "Salta",
    // BUTTON_REPORT:                      "Report",
    BUTTON_REPORT:                         "Segnala",
    // BUTTON_RESET:                       "Reset index",
    BUTTON_RESET:                          "Resetta l’index",
    // BUTTON_RESET_HARD:                  "Reset to this commit and discard the changes that came after it. (reset --hard)",
    BUTTON_RESET_HARD:                     "Annulla questo commit e annulla le modifiche effettuate dopo di esso.",
    // BUTTON_RESET_MIXED:                 "Reset to this commit and retain changes that came after it unstaged. (reset --mixed)",
    BUTTON_RESET_MIXED:                    "Annulla questo commit e conserva le modifiche effettuate dopo di esso.",
    // BUTTON_RESET_SOFT:                  "Reset to this commit and retain changes that came after it staged for a new commit. (reset --soft)",
    BUTTON_RESET_SOFT:                     "Annulla questo commit e conserva le modifiche effettuate dopo di esso preparandole per un nuovo commit.",
    // BUTTON_SAVE:                        "Save",
    BUTTON_SAVE:                           "Salva",
    // CANCEL:                             "Cancel",
    CANCEL:                                "Annulla",
    // CHANGELOG:                          "Changelog",
    CHANGELOG:                             "Changelog",
    // CHANGE_USER_EMAIL:                  "Change git email",
    CHANGE_USER_EMAIL:                     "Cambia l’indirizzo email di Git",
    // CHANGE_USER_NAME:                   "Change git username",
    CHANGE_USER_NAME:                      "Cambia il nome utente di Git",
    // CHECK_GIT_SETTINGS:                 "Failed to launch Git executable - fix Git settings and restart Brackets",
    CHECK_GIT_SETTINGS:                    "Controlla le impostazioni di Git",
    // CLONE_REPOSITORY:                   "Clone repository",
    CLONE_REPOSITORY:                      "Clona il repository",
    // CODE_INSPECTION_PROBLEMS:           "Code inspection problems:",
    CODE_INSPECTION_PROBLEMS:              "Problemi rilevati durante l’ispezione del codice:",
    // COLLAPSE_ALL:                       "Collapse all",
    COLLAPSE_ALL:                          "Rimpicciolisci tutti",
    // COLORED_AVATAR:                     "Colored avatar",
    COLORED_AVATAR:                        "Avatar colorato",
    // COMMAND_ARGUMENTS:                  "Command arguments",
    COMMAND_ARGUMENTS:                     "Argomenti del comando",
    // COMMIT:                             "Commit",
    COMMIT:                                "Commit",
    // COMMIT_ALL_SHORTCUT:                "Commit all files",
    COMMIT_ALL_SHORTCUT:                   "Commit di tutti i file",
    // COMMIT_CURRENT_SHORTCUT:            "Commit current file",
    COMMIT_CURRENT_SHORTCUT:               "Commit del file corrente",
    // COMMIT_MESSAGE_PLACEHOLDER:         "Enter commit message here\u2026",
    COMMIT_MESSAGE_PLACEHOLDER:            "Inserisci qui il messaggio di commit\u2026",
    // CREATE_NEW_BRANCH:                  "Create new branch\u2026",
    CREATE_NEW_BRANCH:                     "Crea un nuovo branch\u2026",
    // CREATE_NEW_GITFTP_SCOPE:            "Create new Git-FTP remote\u2026",
    CREATE_NEW_GITFTP_SCOPE:               "Crea un nuovo remote di Git-FTP",
    // CREATE_NEW_REMOTE:                  "Create new remote\u2026",
    CREATE_NEW_REMOTE:                     "Crea un nuovo remote\u2026",
    // CURRENT_TRACKING_BRANCH:            "Current tracking branch",
    CURRENT_TRACKING_BRANCH:               "Branch remoto di riferimento",
    // _CURRENT_TRACKING_BRANCH:           "current tracking branch",
    _CURRENT_TRACKING_BRANCH:              "branch remoto di riferimento",
    // CUSTOM_TERMINAL_COMMAND:            "Custom terminal command (sample: gnome-terminal or complete path to executable)",
    CUSTOM_TERMINAL_COMMAND:               "Comando del terminale personalizzato (esempio: gnome-terminal o il percorso completo all’eseguibile)",
    // CUSTOM_TERMINAL_COMMAND_HINT:       "Sample arguments: --window --working-directory=$1<br>$1 in arguments will be replaced by current project directory.",
    CUSTOM_TERMINAL_COMMAND_HINT:          "Argomenti di esempio: --window --working-directory=$1<br>$1 negli argomenti verà rimpiazzato con il percorso della directory del progetto.",
    // DATE_FORMAT:                        "MM/DD/YYYY HH:mm:ss",
    DATE_FORMAT:                           "DD/MM/YYYY HH:mm:ss",
    // DATE_MODE_0:                        "Formatted using local date format",
    DATE_MODE_0:                           "Formattato usando il formato di data locale",
    // DATE_MODE_1:                        "Relative time",
    DATE_MODE_1:                           "Tempo relativo",
    // DATE_MODE_2:                        "Intelligent mode (relative/formatted)",
    DATE_MODE_2:                           "Modalità intelligente (relativo/formattato)",
    // DATE_MODE_3:                        "Formatted using your own format",
    DATE_MODE_3:                           "Formattata usando il formato definito dall’utente",
    // DATE_MODE_4:                        "Original Git date",
    DATE_MODE_4:                           "Data originale di Git",
    // DEBUG:                              "Debug",
    DEBUG:                                 "Debug",
    // DEBUG_MODE_SETTING:                 "DEBUG mode &mdash; Leave this OFF unless you need to find a problem with the extension. All Git communication will be forwarded to Brackets console!",
    DEBUG_MODE_SETTING:                    "Modalità di debug &mdash; Lasciarla disattivata a meno che non si debba trovare un problema. Tutte le comunicazioni con Git verranno inviate alla console di Brackets!",
    // DELETE_FILE:                        "Delete file",
    DELETE_FILE:                           "Cancella il file",
    // DELETE_LOCAL_BRANCH:                "Delete local branch",
    DELETE_LOCAL_BRANCH:                   "Cancella il branch locale",
    // DELETE_LOCAL_BRANCH_NAME:           "Do you really wish to delete local branch \"{0}\"?",
    DELETE_LOCAL_BRANCH_NAME:              "Vuoi veramente eliminare il branch locale \"{0}\"?",
    // DELETE_REMOTE:                      "Delete remote",
    DELETE_REMOTE:                         "Cancella il remote",
    // DELETE_REMOTE_NAME:                 "Do you really wish to delete remote \"{0}\"?",
    DELETE_REMOTE_NAME:                    "Vuoi veramente eliminare il remote \"{0}\"?",
    // DIALOG_CHECKOUT:                    "When checking out a commit, the repo will go into a DETACHED HEAD state. You can't make any commits unless you create a branch based on this.",
    DIALOG_CHECKOUT:                       "Quando fai il checkout di un commit, il repository andrà in DETACHED HEAD. Non potrai fare nessun commit a meno che creerai un branch basato su questo.",
    // DIALOG_PULL_TITLE:                  "Pull from remote",
    DIALOG_PULL_TITLE:                     "Scarica dal remote",
    // DIALOG_PUSH_TITLE:                  "Push to remote",
    DIALOG_PUSH_TITLE:                     "Carica nel remote",
    // DIALOG_RESET_HARD:                  "You will lose all changes after this commit!",
    DIALOG_RESET_HARD:                     "Perderai tutte le modifiche effettuate dopo questo commit!",
    // DIALOG_RESET_MIXED:                 "Changes after this commit will be unstaged.",
    DIALOG_RESET_MIXED:                    "Le modifiche effettuate dopo questo commit verranno conservate",
    // DIALOG_RESET_SOFT:                  "Changes after this commit will be staged for a new commit.",
    DIALOG_RESET_SOFT:                     "Le modifiche effettuate dopo questo commit verranno preparate per un nuovo commit.",
    // DIFF:                               "Diff",
    DIFF:                                  "Differenze",
    // DIFFTOOL:                           "Diff with difftool",
    DIFFTOOL:                              "Guarda le differenze con difftool",
    // DIFF_FAILED_SEE_FILES:              "Git diff failed to provide diff results. This is the list of staged files to be commited:",
    DIFF_FAILED_SEE_FILES:                 "Git non è riuscito a fornire le differenze. Questa è la lista dei file staged su cui verrà effettuato il commit:",
    // ENABLE_ADVANCED_FEATURES:           "Enable advanced features",
    ENABLE_ADVANCED_FEATURES:              "Abilita le funzioni avanzate",
    // ENTER_GITFTP_SCOPE_NAME:            "Enter name of the new Git-FTP remote:",
    ENTER_GITFTP_SCOPE_NAME:               "Inserisci il nome del nuovo remote di Git-FTP:",
    // ENTER_GITFTP_SCOPE_URL:             "Enter FTP URL of the new Git-FTP remote specifing username and password:",
    ENTER_GITFTP_SCOPE_URL:                "Inserisci l'url FTP del nuovo remote di Git-FTP specificando username e password:",
    // ENTER_NEW_USER_EMAIL:               "Enter email",
    ENTER_NEW_USER_EMAIL:                  "Inserisci l’indirizzo email",
    // ENTER_NEW_USER_NAME:                "Enter username",
    ENTER_NEW_USER_NAME:                   "Inserisci il nome utente",
    // ENTER_PASSWORD:                     "Enter password:",
    ENTER_PASSWORD:                        "Inserisci password",
    // ENTER_REMOTE_GIT_URL:               "Enter Git URL of the repository you want to clone:",
    ENTER_REMOTE_GIT_URL:                  "Inserisci l’indirizzo Git del repository che si vuole clonare",
    // ENTER_REMOTE_NAME:                  "Enter name of the new remote:",
    ENTER_REMOTE_NAME:                     "Inserisci il nome del nuovo remote",
    // ENTER_REMOTE_URL:                   "Enter URL of the new remote:",
    ENTER_REMOTE_URL:                      "Inserisci l’URL del nuovo remote",
    // ENTER_USERNAME:                     "Enter username:",
    ENTER_USERNAME:                        "Inserisci nome utente",
    // ERROR_CONNECT_NODEJS:               "Failed to connect to NodeJS. If you've just updated the extension then close all instances of Brackets and try starting again.",
    ERROR_CONNECT_NODEJS:                  "Impossibile connettersi a NodeJS. Se hai appena aggiornato l'estensione chiusi tutte le istanze di Brackets e prova a riavviarlo.",
    // ERROR_TERMINAL_NOT_FOUND:           "Terminal was not found for your OS, you can define a custom Terminal command in the settings",
    ERROR_TERMINAL_NOT_FOUND:              "Il terminale non è stato trovato per il tuo sistema operativo, puoi definire un comando da terminale personalizzato nelle impostazioni",
    // EXPAND_ALL:                         "Expand all",
    EXPAND_ALL:                            "Espandi tutto",
    // EXTENDED_COMMIT_MESSAGE:            "EXTENDED",
    EXTENDED_COMMIT_MESSAGE:               "Forma estesa",
    // EXTENSION_WAS_UPDATED_TITLE:        "The extension was updated to {0}",
    EXTENSION_WAS_UPDATED_TITLE:           "L’estensione è stata aggiornata alla versione {0}",
    // FEATURES:                           "Features",
    FEATURES:                              "Funzionalità",
    // FILE_ADDED:                         "New file",
    FILE_ADDED:                            "Nuovo file",
    // FILE_COPIED:                        "Copied",
    FILE_COPIED:                           "Copiato",
    // FILE_DELETED:                       "Deleted",
    FILE_DELETED:                          "Cancellato",
    // FILE_IGNORED:                       "Ignored",
    FILE_IGNORED:                          "Ignorato",
    // FILE_MODIFIED:                      "Modified",
    FILE_MODIFIED:                         "Modificato",
    // FILE_RENAMED:                       "Renamed",
    FILE_RENAMED:                          "Rinominato",
    // FILE_STAGED:                        "Staged",
    FILE_STAGED:                           "Staged",
    // FILE_UNMERGED:                      "Unmerged",
    FILE_UNMERGED:                         "Non mergato",
    // FILE_UNMODIFIED:                    "Unmodified",
    FILE_UNMODIFIED:                       "Non modificato",
    // FILE_UNTRACKED:                     "Untracked",
    FILE_UNTRACKED:                        "Non monitorato",
    // FOR_MAC_LINUX_USERS:                "For Mac/Linux users",
    FOR_MAC_LINUX_USERS:                   "Per utenti Mac/Linux",
    // FOR_WINDOWS_USERS:                  "For Windows users",
    FOR_WINDOWS_USERS:                     "Per utenti Windows",
    // GITFTP_PUSH_RESPONSE:               "Git-FTP Push response",
    GITFTP_PUSH_RESPONSE:                  "Responso del risultato dell’azione push di Git-FTP",
    // GITFTP_SCOPES:                      "Git-FTP remotes",
    GITFTP_SCOPES:                         "Git-FTP remotes",
    // GIT_COMMIT:                         "Git commit\u2026",
    GIT_COMMIT:                            "Git commit\u2026",
    // GIT_CONFIGURATION:                  "Git configuration",
    GIT_CONFIGURATION:                     "Configurazione di Git",
    // GIT_DIFF:                           "Git diff &mdash;",
    GIT_DIFF:                              "Git diff &mdash;",
    // GIT_PULL_RESPONSE:                  "Git Pull response",
    GIT_PULL_RESPONSE:                     "Risposta del Git Pull",
    // GIT_PUSH_RESPONSE:                  "Git Push response",
    GIT_PUSH_RESPONSE:                     "Risposta del Git Push",
    // GIT_REMOTES:                        "Git remotes",
    GIT_REMOTES:                           "Git remote",
    // GIT_SETTINGS:                       "Git Settings\u2026",
    GIT_SETTINGS:                          "Impostazioni di Git\u2026",
    // GOTO_NEXT_GIT_CHANGE:               "Go to next Git change",
    GOTO_NEXT_GIT_CHANGE:                  "Vai alla modifica di git successiva",
    // GOTO_PREVIOUS_GIT_CHANGE:           "Go to previous Git change",
    GOTO_PREVIOUS_GIT_CHANGE:              "Vai alla modifica di Git precedente",
    // GUTTER_CLICK_DETAILS:               "Click for more details",
    GUTTER_CLICK_DETAILS:                  "Clicca per maggiori dettagli",
    // HIDE_UNTRACKED:                     "Hide untracked",
    HIDE_UNTRACKED:                        "Nascondi i file non tracciati",
    // HISTORY:                            "History",
    HISTORY:                               "Storia",
    // HISTORY_COMMIT_BY:                  "by",
    HISTORY_COMMIT_BY:                     "di",
    // IDENTICON:                          "Identicon (www.gravatar.com)",
    IDENTICON:                             "Identicon (www.gravatar.com)",
    // INIT_GITFTP_SCOPE:                  "Initialize Git-FTP remote",
    INIT_GITFTP_SCOPE:                     "Inizializza il remote di Git-FTP",
    // INIT_GITFTP_SCOPE_NAME:             "Initialize Git-FTP remote \"{0}\"?",
    INIT_GITFTP_SCOPE_NAME:                "Inizializzare il remote \"{0}\" di Git-FTP?",
    // LAUNCH_BASH_SHORTCUT:               "Bash/Terminal shortcut",
    LAUNCH_BASH_SHORTCUT:                  "Scorciatoia del terminale bash",
    // LINES:                              "Lines",
    LINES:                                 "Linee",
    // _LINES:                             "lines",
    _LINES:                                "linee",
    // LIST_MODIFIED_FILES:                "Modified files",
    LIST_MODIFIED_FILES:                   "File modificati",
    // LOADING:                            "Loading\u2026",
    LOADING:                               "Caricamento\u2026",
    // MARK_MODIFIED_FILES_IN_TREE:        "Mark modified files in file tree",
    MARK_MODIFIED_FILES_IN_TREE:           "Evidenzia i file modificati nell’elenco a sinistra",
    // MERGE_BRANCH:                       "Merge branch",
    MERGE_BRANCH:                          "Effettua il merge del branch",
    // MERGE_MESSAGE:                      "Merge message",
    MERGE_MESSAGE:                         "Messaggio del merge",
    // MERGE_RESULT:                       "Merge result",
    MERGE_RESULT:                          "Risultati del merge",
    // MORE_INFO:                          "More information\u2026",
    MORE_INFO:                             "Più informazioni\u2026",
    // NORMALIZE_LINE_ENDINGS:             "Normalize line endings (to \\n)",
    NORMALIZE_LINE_ENDINGS:                "Normalizza i fine linea (a \\n)",
    // NOTHING_TO_COMMIT:                  "Nothing to commit, working directory clean.",
    NOTHING_TO_COMMIT:                     "Nessun file su cui effettuare il commit, la cartella è pulita.",
    // OK:                                 "OK",
    OK:                                    "OK",
    // OPERATION_IN_PROGRESS_TITLE:        "Git operation in progress\u2026",
    OPERATION_IN_PROGRESS_TITLE:           "Operazione di Git in corso\u2026",
    // ORIGIN_BRANCH:                      "Origin branch",
    ORIGIN_BRANCH:                         "Branch di origine",
    // PANEL_COMMAND:                      "Show Git panel",
    PANEL_COMMAND:                         "Mostra il pannello di Git",
    // PANEL_SHORTCUT:                     "Toggle panel",
    PANEL_SHORTCUT:                        "Mostra/nascondi pannello",
    // PASSWORD:                           "Password",
    PASSWORD:                              "Password",
    // PASSWORDS:                          "Passwords",
    PASSWORDS:                             "Password",
    // PATH_TO_GIT_EXECUTABLE:             "Path to Git executable",
    PATH_TO_GIT_EXECUTABLE:                "Percorso dell’eseguibile Git",
    // PATH_TO_GIT_MSYSGIT:                "Path to msysgit folder",
    PATH_TO_GIT_MSYSGIT:                   "Percorso della cartella msysgit",
    // PICTURE:                            "Gravatar (www.gravatar.com)",
    PICTURE:                               "Gravatar (www.gravatar.com)",
    // PULL_AVOID_MERGING:                 "Avoid manual merging",
    PULL_AVOID_MERGING:                    "Evita il merge manuale",
    // PULL_DEFAULT:                       "Default merge",
    PULL_DEFAULT:                          "Merge normale",
    // PULL_FROM:                          "Pull from",
    PULL_FROM:                             "Scarica da",
    // PULL_MERGE_NOCOMMIT:                "Merge without commit",
    PULL_MERGE_NOCOMMIT:                   "Merge senza un commit",
    // PULL_REBASE:                        "Use rebase",
    PULL_REBASE:                           "Usa rebase",
    // PULL_RESET:                         "Use soft reset",
    PULL_RESET:                            "Usa il reset leggero",
    // PULL_SHORTCUT:                      "Pull from remote repository",
    PULL_SHORTCUT:                         "Scarica dal repository remoto",
    // PUSH_DEFAULT:                       "Default push",
    PUSH_DEFAULT:                          "Push normale",
    // PUSH_DELETE_BRANCH:                 "Delete remote branch",
    PUSH_DELETE_BRANCH:                    "Elimina il branch remoto",
    // PUSH_FORCED:                        "Forced push",
    PUSH_FORCED:                           "Push forzato",
    // PUSH_SHORTCUT:                      "Push to remote repository",
    PUSH_SHORTCUT:                         "Carica sul repository remoto",
    // PUSH_TO:                            "Push to",
    PUSH_TO:                               "Push su",
    // Q_DELETE_FILE:                      "Are you sure you wish to delete the file <span class='dialog-filename'>{0}</span>?",
    Q_DELETE_FILE:                         "Sei sicuro di voler cancellare il file <span class='dialog-filename'>{0}</span>?",
    // Q_RESTART_BRACKETS:                 "Do you wish to restart Brackets to apply new settings?",
    Q_RESTART_BRACKETS:                    "Desideri riavviare Brackets per applicare le nuove impostazioni?",
    // Q_UNDO_CHANGES:                     "Reset changes to file <span class='dialog-filename'>{0}</span>?",
    Q_UNDO_CHANGES:                        "Revertire le modifiche al file <span class='dialog-filename'>{0}</span>?",
    // REBASE_RESULT:                      "Rebase result",
    REBASE_RESULT:                         "Risultato del rebase",
    // REMOVE_BOM:                         "Remove BOM from files",
    REMOVE_BOM:                            "Rimuovi i BOM dai file",
    // REMOVE_FROM_GITIGNORE:              "Remove from .gitignore",
    REMOVE_FROM_GITIGNORE:                 "Rimuovi dal .gitignore",
    // REQ_INTERNET:                       "Requires internet connection",
    REQ_INTERNET:                          "Richiede una connessione ad internet",
    // RESET_LOCAL_REPO:                   "Discard all changes since last commit",
    RESET_LOCAL_REPO:                      "Annulla tutte le modifiche dall'ultimo commit",
    // RESET_LOCAL_REPO_CONFIRM:           "Do you wish to discard all changes done since last commit? This action can't be reverted.",
    RESET_LOCAL_REPO_CONFIRM:              "Vuoi annullare tutte le modifiche fatte dall'ultimo commit? Quest'azione non può essere annullata.",
    // RESTART:                            "Restart",
    RESTART:                               "Riavvia",
    // SAVE_CREDENTIALS_HELP:              "You don't need to fill out username/password if your credentials are managed elsewhere. Use this only when your operation keeps timing out.",
    SAVE_CREDENTIALS_HELP:                 "Non hai bisogno di inserire username/password se le credenziali sono gestite altrove. Usa questo solo se le operazioni continuano ad andare fuori tempo.",
    // SAVE_CREDENTIALS_IN_URL:            "Save credentials to remote url (in plain text)",
    SAVE_CREDENTIALS_IN_URL:               "Salva le credenziali dell'url del remote (non protette)",
    // SAVE_PASSWORD_QUESTION:             "Save username/password?",
    SAVE_PASSWORD_QUESTION:                "Ricordare nome utente/password?",
    // SET_ORIGIN_URL:                     "Set origin URL",
    SET_ORIGIN_URL:                        "Imposta URL di origine",
    // SET_THIS_BRANCH_AS_TRACKING:        "Set this branch as a new tracking branch",
    SET_THIS_BRANCH_AS_TRACKING:           "Imposta questo branch come nuovo branch di riferimento",
    // SHORTCUTS:                          "Shortcuts",
    SHORTCUTS:                             "Scorciatoie",
    // SHORTCUTS_HINT:                     "Separate keys with dash, like this: Ctrl-Alt-G<br>You can use the english key identifiers Ctrl, Cmd (Mac), Alt and Shift.",
    SHORTCUTS_HINT:                        "Separare i tasti con un trattino, come così: Ctrl-Alt-G<br>Puoi usare gli identificativi inglesi dei tasti Ctrl, Cmd (per Mac), Alt e Shift.",
    // SHOWN_DATE_FORMAT:                  "Format of commit dates in history",
    SHOWN_DATE_FORMAT:                     "Formato delle date dei commit nella cronologia",
    // SHOW_BASH_TERMINAL_BUTTON:          "Show Bash/Terminal button in the panel",
    SHOW_BASH_TERMINAL_BUTTON:             "Visualizza il bottone del terminale bash nel pannello",
    // SHOW_UNTRACKED:                     "Show untracked",
    SHOW_UNTRACKED:                        "Mostra i files non tracciati",
    // STRIP_WHITESPACE_FROM_COMMITS:      "Strip trailing whitespace from commits",
    STRIP_WHITESPACE_FROM_COMMITS:         "Rimuovi spazi alla fine dei file dai commit",
    // TARGET_BRANCH:                      "Target branch",
    TARGET_BRANCH:                         "Branch di destinazione",
    // TITLE_CHECKOUT:                     "Do you really wish to checkout this commit?",
    TITLE_CHECKOUT:                        "Vuoi veramente effettuare il checkout di questo commit?",
    // TITLE_RESET:                        "Do you really wish to reset?",
    TITLE_RESET:                           "Vuoi veramente effettuare il reset?",
    // TOOLTIP_CHECKOUT_COMMIT:            "Checkout a specific commit",
    TOOLTIP_CHECKOUT_COMMIT:               "Vai a uno specifico commit",
    // TOOLTIP_CLONE:                      "Clone existing repository",
    TOOLTIP_CLONE:                         "Clona un repository esistente",
    // TOOLTIP_CLOSE_NOT_MODIFIED:         "Close files not modified in Git",
    TOOLTIP_CLOSE_NOT_MODIFIED:            "Chiudi i file non modificati su Git",
    // TOOLTIP_COMMIT:                     "Commit the selected files",
    TOOLTIP_COMMIT:                        "Commit i file selezionati",
    // TOOLTIP_FIND_CONFLICTS:             "Starts a search for Git merge/rebase conflicts in the project",
    TOOLTIP_FIND_CONFLICTS:                "Avvia una ricerca per conflitti di merge/rebase nel progetto",
    // TOOLTIP_GITPUSH:                    "Git-FTP Push",
    TOOLTIP_GITPUSH:                       "Git-FTP Push",
    // TOOLTIP_HIDE_FILE_HISTORY:          "Hide file history",
    TOOLTIP_HIDE_FILE_HISTORY:             "Nascondi la cronologia del file",
    // TOOLTIP_HIDE_HISTORY:               "Hide history",
    TOOLTIP_HIDE_HISTORY:                  "Nascondi la cronologia",
    // TOOLTIP_INIT:                       "Initialize repository",
    TOOLTIP_INIT:                          "inizializza il repository",
    // TOOLTIP_MERGE_ABORT:                "Abort the merge operation and reset HEAD to the last local commit",
    TOOLTIP_MERGE_ABORT:                   "Annulla l'operazione di merge e resetta l'HEAD all'ultimo commit locale",
    // TOOLTIP_MORE:                       "More actions\u2026",
    TOOLTIP_MORE:                          "Più opzioni\u2026",
    // TOOLTIP_OPEN_BASH:                  "Open Bash/Terminal console",
    TOOLTIP_OPEN_BASH:                     "Apri la console Bash",
    // TOOLTIP_PICK_REMOTE:                "Pick preferred remote",
    TOOLTIP_PICK_REMOTE:                   "Seleziona il repository remoto preferito",
    // TOOLTIP_PULL:                       "Git Pull",
    TOOLTIP_PULL:                          "Git Pull",
    // TOOLTIP_PUSH:                       "Git Push",
    TOOLTIP_PUSH:                          "Git Push",
    // TOOLTIP_REBASE_ABORT:               "Abort the rebase operation and reset HEAD to the original branch",
    TOOLTIP_REBASE_ABORT:                  "Annulla l'operazione di rebase e resetta l'HEAD al branch originale",
    // TOOLTIP_REBASE_CONTINUE:            "Restart the rebasing process after having resolved a merge conflict",
    TOOLTIP_REBASE_CONTINUE:               "Riavvia il processo di rebase dopo aver risolto i conflitti di merge",
    // TOOLTIP_REBASE_SKIP:                "Restart the rebasing process by skipping the current patch",
    TOOLTIP_REBASE_SKIP:                   "Riavvia il processo di rebase saltando la patch corrente",
    // TOOLTIP_REFRESH_PANEL:              "Refresh panel",
    TOOLTIP_REFRESH_PANEL:                 "Aggiorna pannello",
    // TOOLTIP_SHOW_FILE_HISTORY:          "Show file history",
    TOOLTIP_SHOW_FILE_HISTORY:             "Mostra la cronologia del file",
    // TOOLTIP_SHOW_HISTORY:               "Show history",
    TOOLTIP_SHOW_HISTORY:                  "Mostra la cronologia",
    // UNDO_CHANGES:                       "Discard changes",
    UNDO_CHANGES:                          "Annulla modifiche",
    // UNDO_LAST_LOCAL_COMMIT:             "Undo last local (not pushed) commit",
    UNDO_LAST_LOCAL_COMMIT:                "Annulla l’ultimo commit locale (non caricato)",
    // URL:                                "URL",
    URL:                                   "URL",
    // USERNAME:                           "Username",
    USERNAME:                              "Nome utente",
    // USER_ABORTED:                       "User aborted!",
    USER_ABORTED:                          "Annullato dall'utente!",
    // USER_DATE_FORMAT:                   "Own date format (<a href='http://momentjs.com/docs/#/displaying/format/'>Syntax</a>)",
    USER_DATE_FORMAT:                      "Formato della data personalizzato (<a href='http://momentjs.com/docs/#/displaying/format/'>Sintassi</a>):",
    // USE_CODE_INSPECTION:                "Use Code inspection",
    USE_CODE_INSPECTION:                   "Utilizza l’ispettore del codice",
    // USE_GITFTP:                         "Use Git-FTP",
    USE_GITFTP:                            "Usa Git-FTP",
    // USE_GIT_GUTTER:                     "Use Git gutter marks",
    USE_GIT_GUTTER:                        "Usa la guida laterale di Git per mostrare gli indicatori",
    // USE_REBASE:                         "Use REBASE",
    USE_REBASE:                            "Usa il rebase",
    // USE_VERBOSE_DIFF:                   "Show verbose output in diffs",
    USE_VERBOSE_DIFF:                      "Visualizza l'output più dettagliato nelle differenze",
    // USE_DIFFTOOL:                       "Use difftool for diffs",
    USE_DIFFTOOL:                          "Usa difftool per le differenze",
    // USING_GIT_VERSION:                  "Git version",
    USING_GIT_VERSION:                     "Versione di Git",
    // VIEW_AUTHORS_FILE:                  "View authors of file",
    VIEW_AUTHORS_FILE:                     "Mostra gli autori del file",
    // VIEW_AUTHORS_SELECTION:             "View authors of selection"
    VIEW_AUTHORS_SELECTION:                "Mostra gli autori della selezione"
});
