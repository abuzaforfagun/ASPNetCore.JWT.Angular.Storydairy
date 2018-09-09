using System;
using System.Collections.Generic;
using System.Text;

namespace StoryDairy.Core.Model
{
    public class Story
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        private DateTime _date;
        public DateTime DateTime
        {
            get { return _date; }
            set
            {
                if (value != new DateTime())
                {
                    _date = value;
                }
            }
        }

        public override string ToString()
        {
            StringBuilder response = new StringBuilder();
            response.AppendLine($"Title: {Title}");
            response.AppendLine($"Body: {Body}");
            response.AppendLine($"Datetime: {DateTime}");
            return response.ToString();
        }
    }
}
