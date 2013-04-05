/**
 *  * JavaScript function to check an email address conforms to RFC822 (http://www.ietf.org/rfc/rfc0822.txt)
 *  *
 *  * Version: 0.2
 *  * Author: Ross Kendall
 *  * Created: 2006-12-16
 *  * Updated: 2007-03-22
 *  *
 *  * Based on the PHP code by Cal Henderson
 *  * http://iamcal.com/publish/articles/php/parsing_email/
 *  */

/*
 * 
 * Portions copyright (C) 2006  Ross Kendall - http://rosskendall.com
 * Portions copyright (C) 1993-2005 Cal Henderson - http://iamcal.com
 * 
 * Licenced under Creative Commons _or_ GPL according to the terms below...
 * 
 * --
 * 
 *  Licensed under a Creative Commons Attribution-ShareAlike 2.5 License
 * 
 *  You are free:
 * 
 *     * to Share -- to copy, distribute, display, and perform the work
 *     * to Remix -- to make derivative works
 * 
 *  Under the following conditions:
 * 
 *     * Attribution. You must attribute the work in the manner specified by the author or licensor.
 *     * Share Alike. If you alter, transform, or build upon this work, you may distribute the resulting work only under a license identical to this one.
 * 
 *     * For any reuse or distribution, you must make clear to others the license terms of this work.
 *     * Any of these conditions can be waived if you get permission from the copyright holder.
 * 
 *  http://creativecommons.org/licenses/by-sa/2.5/
 * 
 * --
 * 
 *  This program is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU General Public License
 *  as published by the Free Software Foundation; either version 2
 *  of the License, or (at your option) any later version.
 * 
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 * 
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *  http://www.gnu.org/copyleft/gpl.html
 * 
 * */

var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
var sQuotedPair = '\\x5c[\\x00-\\x7f]';
var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
var sDomain_ref = sAtom;
var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
var sWord = '(' + sAtom + '|' + sQuotedString + ')';
var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

var reValidEmail = new RegExp(sValidEmail);

module.exports = {
  validate: function (email) {
    return reValidEmail.test(email);
  }
};
