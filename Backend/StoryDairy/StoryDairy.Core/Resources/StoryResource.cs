using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StoryDairy.Core.Resources
{
    public class StoryResource
    {
        public string Title { get; set; }
        public string Body { get; set; }
        [Range(typeof(DateTime), "1/1/1900", "1/1/3000", ErrorMessage = "Date is out of Range")]
        public DateTime DateTime { get; set; }
    }
}
