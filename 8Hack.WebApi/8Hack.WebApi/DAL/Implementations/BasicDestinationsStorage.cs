using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.Common;

namespace _8Hack.WebApi.DAL.Implementations
{
    public class BasicDestinationsStorage : IDestinationsStorage
    {
        private IList<Destination> _destinations;

        public BasicDestinationsStorage()
        {
            _destinations = new List<Destination>();

            _destinations.Add(new Destination() { Id = "1", Name = "רכבת תל אביב האוניברסיטה" });
            _destinations.Add(new Destination() { Id = "2", Name = "רמת השרון" });
            _destinations.Add(new Destination() { Id = "3", Name = "הרצליה פיתוח" });
            _destinations.Add(new Destination() { Id = "4", Name = "דרך השלום" });
            _destinations.Add(new Destination() { Id = "5", Name = "באר שבע" });
            _destinations.Add(new Destination() { Id = "6", Name = "רכבת סבידור מרכז" });
            _destinations.Add(new Destination() { Id = "7", Name = "ראשון לציון - מזרח" });
            _destinations.Add(new Destination() { Id = "8", Name = "ראשון לציון - מערב" });
            _destinations.Add(new Destination() { Id = "9", Name = "אילת" });
            _destinations.Add(new Destination() { Id = "10", Name = "דן" });
        }

        public IEnumerable<Destination> Destinations
        {
            get { return _destinations; }
        }

        public Destination GetDestination(string destintionId)
        {
            var requestedDestination = _destinations.FirstOrDefault(des => des.Id == destintionId);
            return requestedDestination;
        }
    }
}