# Publishing checklist

Ready to publish or share a chart? Use this quick checklist to ensure it meets our standards.
<br>


<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

**🔍 Data Accuracy**

<label><input type="checkbox" class="task-check"> Sources cited and linked correctly</label><br>
<label><input type="checkbox" class="task-check"> Underlying data has been checked</label><br>
<label><input type="checkbox" class="task-check"> Key message matches the data</label>

**🎨 Design**

<label><input type="checkbox" class="task-check"> Official colour palette, font, layout and other styling elements have been used</label><br>
<label><input type="checkbox" class="task-check"> The chart has been checked for mislabeling, misinterpretation, and other design errors</label><br>
<label><input type="checkbox" class="task-check"> The chart has been checked against our data visualisation principles</label>


**♿ Accessibility**

<label><input type="checkbox" class="task-check"> Colours and elements are checked for accessibility</label><br>
<label><input type="checkbox" class="task-check"> Alt text is provided</label><br>
<label><input type="checkbox" class="task-check"> Interactivity has been tested</label><br>
<label><input type="checkbox" class="task-check"> The chart has been tested on different devices</label>


**👀 Publishing**

<label><input type="checkbox" class="task-check"> Flourish charts as saved in the correct folder on the ONE Campaign Project</label><br>
<label><input type="checkbox" class="task-check"> Chart object named: <code>[Page]_[ChartType]_[AdditionalInfo]_[Optional "Mobile"]</code></label><br>
<label><input type="checkbox" class="task-check"> The chart has been user tested with at least 2 other people</label><br>
<label><input type="checkbox" class="task-check"> The chart has been reviewed by the data team</label>






<script>
  function checkAllTasksComplete() {
    const checkboxes = document.querySelectorAll('.task-check');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    if (allChecked) {
      confetti();
    }
  }

  // Attach listener to each checkbox
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.task-check').forEach(cb => {
      cb.addEventListener('change', checkAllTasksComplete);
    });
  });
</script>
