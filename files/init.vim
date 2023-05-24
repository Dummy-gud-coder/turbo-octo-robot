"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Colors and Fonts
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
filetype plugin indent on
syntax on
colorscheme gruvbox

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Plugins
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
call plug#begin('~/.vim/plugged')
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'https://github.com/vim-airline/vim-airline'
Plug 'https://github.com/kien/ctrlp.vim'
Plug 'https://github.com/scrooloose/nerdtree'
Plug 'https://github.com/ivalkeen/nerdtree-execute'
Plug 'https://github.com/kien/rainbow_parentheses.vim'
Plug 'https://github.com/qpkorr/vim-bufkill'
Plug 'https://github.com/liuchengxu/vista.vim'
Plug 'https://github.com/ap/vim-buftabline'
Plug 'https://github.com/vim-scripts/vim-auto-save'
Plug 'https://github.com/vim-airline/vim-airline-themes'
Plug 'https://github.com/morhetz/gruvbox'
Plug 'https://github.com/ziglang/zig.vim'
Plug 'https://github.com/wlangstroth/vim-racket'
Plug 'https://github.com/junegunn/limelight.vim'
Plug 'https://github.com/junegunn/goyo.vim'
Plug 'leafgarland/typescript-vim'
Plug 'peitalin/vim-jsx-typescript'
call plug#end()

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => General
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set modifiable
set noconfirm
set noerrorbells
set novisualbell
set autochdir
set list
set wrap!
set mouse=
set ff=unix
set background=dark
set encoding=utf-8
set fillchars+=" "
set fillchars+=eob:\ 
set cmdheight=1

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Backup
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set nobackup
set nowb
set noswapfile

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Text
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set linebreak
set expandtab
set magic
set ignorecase
set scrolloff=50
set shiftwidth=2
set tabstop=2
set listchars=eol: ,trail:~,extends:>,precedes:<

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Folding
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set foldmethod=manual
set foldnestmax=1

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Plugins
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:auto_save                   = 1
let g:auto_save_in_insert_mode    = 0
let g:auto_save_silent            = 1
let g:rbpt_max = 16
let g:rbpt_loadcmd_toggle = 0
let g:ctrlp_cmd                   = 'CtrlPMRU'
let g:ctrlp_use_caching           = 1
let g:ctrlp_working_path_mode     = 'rw'
let g:ctrlp_open_multiple_files   = 'i'
let g:ctrlp_extensions            = ['tag']
let g:ctrlp_match_window          = 'results:50'
let g:NERDTreeDirArrowExpandable  = "+"
let g:NERDTreeDirArrowCollapsible = "~"
let g:NERDTreeNodeDelimiter       = "\u00a0"
let NERDTreeIgnore                = ['zig-cache', '.git', 'desktop.ini', 'Rubbish', '.obj', '.vc', '.sln', '.pdb', '.next', 'node_modules', '^out$', '.eslintrc.json', 'next-env.d.ts', 'package-lock.json', 'tsconfig.json']
let NERDTreeMinimalUI             = 1
let NERDTreeDirArrows             = 1
let NERDTreeShowBookmarks         = 1
let NERDTreeShowHidden            = 1
let g:NERDTreeMouseMode=3
let g:limelight_conceal_ctermfg   = 1
let g:limelight_conceal_ctermfg   = 'darkgrey'
let g:limelight_paragraph_span    = 0
let g:airline_symbols             = {}
let g:airline_symbols.space       = "\ua0"
let g:airline_symbols.whitespace  = 'Ξ'
let g:airline_powerline_fonts     = 1
let g:airline_left_sep            = ''
let g:airline_left_alt_sep        = ''
let g:airline_right_sep           = ''
let g:airline_right_alt_sep       = ''
let g:airline_symbols.branch      = ''
let g:airline_symbols.readonly    = ''
let g:airline_symbols.linenr      = ''
let g:vista#renderer#enable_icon  = 1
let g:vista_icon_indent           = ["╰▸ ", "├▸ "]
let g:zig_fmt_autosave = 0
let g:coc_disable_startup_warning = 1

let g:ctrlp_custom_ignore = {
\ 'dir':  '\v[\/]\.(git|hg|svn|)|(zig-cache|cache|_bin|assets)$',
\ 'file': '\v\.(exe|so|dll|obj)$',
\ }

let g:vista#renderer#icons = {
\   "function": '',
\   "variable": 'Ξ',
\  }

let g:rbpt_colorpairs = [
  \ ['brown',       'RoyalBlue3'],
  \ ['Darkblue',    'SeaGreen3'],
  \ ['darkgray',    'DarkOrchid3'],
  \ ['darkgreen',   'firebrick3'],
  \ ['darkcyan',    'RoyalBlue3'],
  \ ['darkred',     'SeaGreen3'],
  \ ['darkmagenta', 'DarkOrchid3'],
  \ ['brown',       'firebrick3'],
  \ ['darkmagenta', 'DarkOrchid3'],
  \ ['Darkblue',    'firebrick3'],
  \ ['darkgreen',   'RoyalBlue3'],
  \ ['darkcyan',    'SeaGreen3'],
  \ ['darkred',     'DarkOrchid3'],
  \ ['red',         'firebrick3'],
  \ ]

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Functions
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! Hil()
  set showtabline=2
  hi ERROR NONE
  hi ERRORMSG NONE
  hi TabLine            ctermbg =NONE
  hi TabLineSel         ctermbg =NONE
  hi TabLineFill        ctermbg =NONE
  hi VertSplit          ctermbg =NONE  ctermfg =black cterm=NONE
  hi Folded             ctermbg =NONE
  hi SignColumn         ctermbg =NONE
  hi SignatureMarkText  ctermbg =NONE
  hi BufTabLineFill     ctermbg =NONE   ctermfg =grey
  hi BufTabLineCurrent  ctermbg =NONE   ctermfg =white
  hi BufTabLineHidden   ctermbg =NONE   ctermfg =grey
  hi BufTabLineActive   ctermbg =NONE   ctermfg =grey
  hi ColorColumn        ctermbg =grey
  hi CursorWord0        ctermbg =grey  ctermfg =black
  hi Normal             ctermbg =NONE   ctermfg =NONE
  hi NonText            ctermbg =NONE   ctermfg =black
  AirlineTheme serene
endfunction

function Dim()
  set showtabline=0
  hi Normal           ctermbg =black
endfunction

function! Zen()
  Goyo
  Limelight!!
  if exists("g:syntax_on") | syntax off | else | syntax enable | endif
  if exists("g:syntax_on") | call Hil() | else | call Dim() | endif
endfunction

function! Nt()
  if line('$') == 1 && getline(1) == ''
  else
    NERDTreeClose
    NERDTreeFind
  endif
endfunction

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Autocommands
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
au VimEnter * cal Hil()
au VimEnter * NERDTree
au BufRead,BufEnter,BufNewFile *.rkt RainbowParenthesesLoadRound
au BufRead,BufEnter,BufNewFile *.rkt RainbowParenthesesLoadSquare
au BufRead,BufEnter,BufNewFile *.rkt RainbowParenthesesLoadBraces
au BufRead,BufEnter,BufNewFile *.rkt RainbowParenthesesActivate
au BufRead,BufNewFile * retab
au BufWinLeave ?* silent! mkview
au BufWinEnter ?* silent! loadview 

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Mapping
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

cmap <S-Insert>  <C-R>+

vnoremap <C-r> "hy:%s/<C-r>h//g<left><left><left>

nnoremap  <c-up>    1{<up>
nnoremap  <c-down>  1}<down>
nnoremap  <c-a>     :call Zen()<CR>
nnoremap  <c-x>     :Vista!!<CR>
nnoremap  <c-d>     :NERDTreeToggle<CR>
nnoremap  <Space>   :bn<CR>
nnoremap  <c-e>     :BD<CR>
nnoremap  <c-t>     :enew<CR>
nnoremap  <tab>     <C-w><C-w>
nnoremap  <c-f>     :silent !zig fmt %:p<CR>
tnoremap  <Esc>     <C-\><C-n>

inoremap <silent><expr> <TAB>
  \ pumvisible() ? "\<C-n>" :
  \ <SID>check_back_space() ? "\<TAB>" :
  \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

inoremap <F5> <C-O>za
onoremap <F5> <C-C>za
vnoremap <F5> zf
nnoremap <F5> za
nnoremap <F6> zM
nnoremap <F7> zR
nnoremap <F8> zd