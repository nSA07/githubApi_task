import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import clone from 'clone';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const RepoList = () => {
    const data = useSelector((state) => state.issue.issues)
    let issues;
    const [boards, setBoards] = useState([])

    useEffect(() => {
      issues = clone(data);
      setBoards([
        {id: 1, title: 'ToDo', items : issues},
        {id: 2, title: 'In Progress', items :[]},
        {id: 3, title: 'Done', items :[]},
      ])
    },[data]);

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    function dragOverHendler(e) {
      e.preventDefault()
    }

    function dragStartHendler(e, board, item) {
      setCurrentBoard(board)
      setCurrentItem(item)
    }

    function dropHendler(e, board, item) {
      e.preventDefault()
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)
      const dropIndex = board.items.indexOf(item)
      board.items.splice(dropIndex + 1, 0, currentItem)
      setBoards(boards.map(el => {
        if (el.id === board.id) {
          return board
        }
        if (el.id === currentBoard.id) {
          return currentBoard
        }
        return el
      }))
    }

    function dropCardHendler(board) {
      board.items.push(currentItem)
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)
      setBoards(boards.map(el => {
        if (el.id === board.id) {
          return board
        }
        if (el.id === currentBoard.id) {
          return currentBoard
        }
        return el
      }))
    }

  return (
    <div className='repo'>
        {boards?.map(board => 
          <div
            onDragOver={(e) => dragOverHendler(e)}
            onDrop={() => dropCardHendler(board)}
            className='repo__boards'
          >
            <div className='repo__title'>{board.title}</div>
            <div className='repo__list'>
              {board.items.map(item =>
                <Card
                  onDragOver={(e) => dragOverHendler(e)}
                  onDragStart={(e) => dragStartHendler(e, board, item)}
                  onDrop={(e) => dropHendler(e, board, item)}
                  draggable={true}
                  sx={{ minWidth: 275 }}
                  className='item'
                >
                  <CardContent draggable={true}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {item.title}
                      </Typography>
                      <Typography variant="h5" component="div">
                          {item.created_at}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {item.comments}
                      </Typography>
                      <Typography variant="body2">
                          {item.author_association}
                      </Typography>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>  
        )}
    </div>
  )
}
export default RepoList
