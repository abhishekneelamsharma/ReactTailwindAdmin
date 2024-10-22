import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const Forms = () => {


  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const editor = useRef(null);
  const [content, setContent] = useState('');

  return (
    <div class="bg-white p-5 rounded-md">
      <form>
        <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-3">
          <div>
            <label for="first_name" class="block mb-2 text font-medium text-gray-900 dark:text-white">Heading</label>
            <input type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 outline-none" placeholder="John" />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text font-medium text-gray-900 dark:text-white">Image</label>
            <input type="file" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-1.5 outline-none" placeholder="John" style={{ padding: "7px" }} />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text font-medium text-gray-900 dark:text-white">Image</label>
            <select name="" id="" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 outline-none">
              <option value="" default hidden>Select Option</option>
              <option value="">Demo</option>
              <option value="">Demo</option>
              <option value="">Demo</option>
            </select>
          </div>
          <div>
            <label for="first_name" class="block mb-2 text font-medium text-gray-900 ">Time</label>
            <input type="time" name="" id="" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 outline-none" />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date" name="" id="" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 outline-none" />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text font-medium text-gray-900 dark:text-white">Type</label>
            <ToggleButtonGroup
              color='primary'
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{
                background: "white",
                color: "dark",
                height: "42px",
                border: "1px solid gray-100"
              }}
            // color='red'
            >
              <ToggleButton value="web" defaultChecked>Type1</ToggleButton>
              <ToggleButton value="android">Type2</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className='col-span-1 md:col-span-3'>
            <label for="first_name" class="block mb-2 text font-medium text-gray-900 dark:text-white">Editor</label>
            <JoditEditor
              ref={editor}
              value={content}
              config={{
                height: 500
              }}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => { }}
            />
          </div>

        </div>
      </form>
    </div>
  )
}

export default Forms