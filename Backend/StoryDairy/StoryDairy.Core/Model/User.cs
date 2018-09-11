using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Text;
using System.Xml;

namespace StoryDairy.Core.Model
{
    public class User
    {
        public string Name { get; set; }
        public string UserId { get; set; }
        public string Password { get; set; }
    }
}
