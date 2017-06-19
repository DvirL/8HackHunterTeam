using System;
using Newtonsoft.Json;

namespace _8Hack.WebApi.Models.UserManagement
{
    public class UserDetails
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("id")]
        public string Id { get; set; }
    }
}