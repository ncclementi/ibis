window.BENCHMARK_DATA = {
  "lastUpdate": 1682078388719,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "99536ac43c616be1639732338c0b17180414f091",
          "message": "test(bigquery): return the client instead of a bogus SQL result",
          "timestamp": "2023-04-21T07:47:40-04:00",
          "tree_id": "b7a2b098b547be14d1e1dffef79308cf79badc26",
          "url": "https://github.com/ibis-project/ibis/commit/99536ac43c616be1639732338c0b17180414f091"
        },
        "date": 1682078294845,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 884.980648734524,
            "unit": "iter/sec",
            "range": "stddev: 0.006584185341630043",
            "extra": "mean: 1.1299682105252218 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 207.34295326359563,
            "unit": "iter/sec",
            "range": "stddev: 0.0007219906750380804",
            "extra": "mean: 4.822927349398257 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 207.21740988436582,
            "unit": "iter/sec",
            "range": "stddev: 0.0006879667679456574",
            "extra": "mean: 4.825849336491721 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 145.7090251669151,
            "unit": "iter/sec",
            "range": "stddev: 0.00029159203455010477",
            "extra": "mean: 6.862992864405364 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 77.45843186796711,
            "unit": "iter/sec",
            "range": "stddev: 0.0007235877659833552",
            "extra": "mean: 12.910150333337041 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.63539647500271,
            "unit": "iter/sec",
            "range": "stddev: 0.0009272411578731578",
            "extra": "mean: 11.41091431343318 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.055071265652078,
            "unit": "iter/sec",
            "range": "stddev: 0.0030334076451412847",
            "extra": "mean: 124.14539450000106 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.42643587756922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764970745565414",
            "extra": "mean: 7.726396800001112 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 40.107136940278174,
            "unit": "iter/sec",
            "range": "stddev: 0.0049228638795934835",
            "extra": "mean: 24.93321828204933 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8001.417662029446,
            "unit": "iter/sec",
            "range": "stddev: 0.00003208984158991088",
            "extra": "mean: 124.97785295541793 usec\nrounds: 4162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6057440475988114,
            "unit": "iter/sec",
            "range": "stddev: 0.017992253385981292",
            "extra": "mean: 1.6508622808000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.14794428889925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006658440182089881",
            "extra": "mean: 12.476926374997532 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.34834310605598,
            "unit": "iter/sec",
            "range": "stddev: 0.0024397782957781716",
            "extra": "mean: 13.45019886419696 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5570395.606577732,
            "unit": "iter/sec",
            "range": "stddev: 2.6465000022804634e-7",
            "extra": "mean: 179.52046328976246 nsec\nrounds: 57804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 5985.115637826648,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558948939926707",
            "extra": "mean: 167.08114938997673 usec\nrounds: 984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.275343004573823,
            "unit": "iter/sec",
            "range": "stddev: 0.00852590833407424",
            "extra": "mean: 39.564250416662595 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1615.6914995918223,
            "unit": "iter/sec",
            "range": "stddev: 0.0001494910241183566",
            "extra": "mean: 618.9300372333663 usec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 201.4523468187138,
            "unit": "iter/sec",
            "range": "stddev: 0.0007802805991247838",
            "extra": "mean: 4.963953092588672 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1612.9826110444728,
            "unit": "iter/sec",
            "range": "stddev: 0.0001456253769733202",
            "extra": "mean: 619.9694858163776 usec\nrounds: 1128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 637326.8069277469,
            "unit": "iter/sec",
            "range": "stddev: 0.000002308133926175146",
            "extra": "mean: 1.569053724290259 usec\nrounds: 19842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 357.0263426887219,
            "unit": "iter/sec",
            "range": "stddev: 0.0004932740130366957",
            "extra": "mean: 2.8009137714296424 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 118.96152029903503,
            "unit": "iter/sec",
            "range": "stddev: 0.0007655905252749877",
            "extra": "mean: 8.406079524591545 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4752055.567747778,
            "unit": "iter/sec",
            "range": "stddev: 2.6718351459549934e-7",
            "extra": "mean: 210.43524970312882 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 403737.2948435175,
            "unit": "iter/sec",
            "range": "stddev: 6.034271970150463e-7",
            "extra": "mean: 2.4768581272324246 usec\nrounds: 1741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.757486745643923,
            "unit": "iter/sec",
            "range": "stddev: 0.013122307008690673",
            "extra": "mean: 568.9943338000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 186.65288882602667,
            "unit": "iter/sec",
            "range": "stddev: 0.0012186130658782728",
            "extra": "mean: 5.357538296297513 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.34385998432981,
            "unit": "iter/sec",
            "range": "stddev: 0.0025066180253527077",
            "extra": "mean: 14.420887447367049 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.61826602508179,
            "unit": "iter/sec",
            "range": "stddev: 0.0023769773298348207",
            "extra": "mean: 26.58283078048454 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.618232109227613,
            "unit": "iter/sec",
            "range": "stddev: 0.02803832715922823",
            "extra": "mean: 34.94275943333207 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 73.46655819380346,
            "unit": "iter/sec",
            "range": "stddev: 0.0011612902997399875",
            "extra": "mean: 13.6116353424645 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0600143773481217,
            "unit": "iter/sec",
            "range": "stddev: 0.09268933318513829",
            "extra": "mean: 943.383430800003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1618.6302323476375,
            "unit": "iter/sec",
            "range": "stddev: 0.00013233109599422883",
            "extra": "mean: 617.8063278539006 usec\nrounds: 1095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.00449956320114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013487105082680563",
            "extra": "mean: 13.888020971831924 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.63985710341481,
            "unit": "iter/sec",
            "range": "stddev: 0.0013466130111739493",
            "extra": "mean: 27.292682861113033 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 586.14822761607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001563358691953236",
            "extra": "mean: 1.7060530986626221 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 963.2575819048416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000941325401450002",
            "extra": "mean: 1.0381439178734522 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 198.46267183437524,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793171087292916",
            "extra": "mean: 5.038730914771412 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 41.9043532466677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274628605766847",
            "extra": "mean: 23.86386908571418 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.04016204246267,
            "unit": "iter/sec",
            "range": "stddev: 0.00405390130221586",
            "extra": "mean: 5.153572278408866 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 213.83367199784317,
            "unit": "iter/sec",
            "range": "stddev: 0.0006240540604344357",
            "extra": "mean: 4.676531954284949 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.23819124900469,
            "unit": "iter/sec",
            "range": "stddev: 0.0007968245397941967",
            "extra": "mean: 10.390885229883642 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3299.344536258275,
            "unit": "iter/sec",
            "range": "stddev: 0.00006366130274039066",
            "extra": "mean: 303.0905044958055 usec\nrounds: 2002"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1690662.753851556,
            "unit": "iter/sec",
            "range": "stddev: 9.788707483338308e-7",
            "extra": "mean: 591.4840187505558 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 161.29448337240632,
            "unit": "iter/sec",
            "range": "stddev: 0.014280882709398075",
            "extra": "mean: 6.199840063290574 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.3475394500293,
            "unit": "iter/sec",
            "range": "stddev: 0.0010671692186068826",
            "extra": "mean: 12.143653674155338 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 265.4244014816041,
            "unit": "iter/sec",
            "range": "stddev: 0.0001780602974457649",
            "extra": "mean: 3.76755111594104 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.16981308916678,
            "unit": "iter/sec",
            "range": "stddev: 0.0013480184527305792",
            "extra": "mean: 11.741249202379612 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 134451.2063288591,
            "unit": "iter/sec",
            "range": "stddev: 0.000014004648173933697",
            "extra": "mean: 7.437642452638645 usec\nrounds: 34966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.64105532853003,
            "unit": "iter/sec",
            "range": "stddev: 0.0013396675813400632",
            "extra": "mean: 27.2917903437504 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 60.043556048348115,
            "unit": "iter/sec",
            "range": "stddev: 0.022787591100303296",
            "extra": "mean: 16.654576540982728 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1456008.254043035,
            "unit": "iter/sec",
            "range": "stddev: 0.000005810745319333585",
            "extra": "mean: 686.8092933011925 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.88917604324288,
            "unit": "iter/sec",
            "range": "stddev: 0.0011712222031961138",
            "extra": "mean: 12.362593475614164 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11370773212645545,
            "unit": "iter/sec",
            "range": "stddev: 0.183733644947035",
            "extra": "mean: 8.794476693000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1609.4907402389408,
            "unit": "iter/sec",
            "range": "stddev: 0.00014939183095471033",
            "extra": "mean: 621.3145406798317 usec\nrounds: 971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 533.2554992900634,
            "unit": "iter/sec",
            "range": "stddev: 0.00014570970529490234",
            "extra": "mean: 1.8752736752482164 msec\nrounds: 505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.21787922771196,
            "unit": "iter/sec",
            "range": "stddev: 0.001049566608852061",
            "extra": "mean: 13.120281095887686 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1350.5442611723793,
            "unit": "iter/sec",
            "range": "stddev: 0.004875313747297536",
            "extra": "mean: 740.442226700457 usec\nrounds: 1191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 75.0258055399023,
            "unit": "iter/sec",
            "range": "stddev: 0.0011657500161096263",
            "extra": "mean: 13.328747259743215 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.36845754688291,
            "unit": "iter/sec",
            "range": "stddev: 0.002045489656666179",
            "extra": "mean: 51.63033750000068 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1343.5616468243177,
            "unit": "iter/sec",
            "range": "stddev: 0.00007625024334824274",
            "extra": "mean: 744.2903735482698 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.10584051605757,
            "unit": "iter/sec",
            "range": "stddev: 0.0010600686953181318",
            "extra": "mean: 13.139596031253475 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1472.5037639804464,
            "unit": "iter/sec",
            "range": "stddev: 0.00031191207665754285",
            "extra": "mean: 679.1154117642576 usec\nrounds: 969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.178989814787691,
            "unit": "iter/sec",
            "range": "stddev: 0.00577766067048946",
            "extra": "mean: 82.10861616665473 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 197.15929429838562,
            "unit": "iter/sec",
            "range": "stddev: 0.00053427532797373",
            "extra": "mean: 5.072040877193321 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 87.81001066392616,
            "unit": "iter/sec",
            "range": "stddev: 0.0008814459057321529",
            "extra": "mean: 11.388223192766528 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.445028790885,
            "unit": "iter/sec",
            "range": "stddev: 0.0014339134573057603",
            "extra": "mean: 14.195465842855777 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4437454.799788658,
            "unit": "iter/sec",
            "range": "stddev: 3.155163348780577e-7",
            "extra": "mean: 225.35440812776233 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6065.520004811573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006466447028234265",
            "extra": "mean: 164.8663262517861 usec\nrounds: 2777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1549651.1671795354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034574805721878213",
            "extra": "mean: 645.3065187696817 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.22467847135879,
            "unit": "iter/sec",
            "range": "stddev: 0.0012172844722438728",
            "extra": "mean: 14.240008238810963 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5283480675796604,
            "unit": "iter/sec",
            "range": "stddev: 0.08257239993055045",
            "extra": "mean: 1.8926916957999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 77.44691036042084,
            "unit": "iter/sec",
            "range": "stddev: 0.0012389588073625237",
            "extra": "mean: 12.912070931509346 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.42846157717464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006555908240294978",
            "extra": "mean: 17.721553486485636 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 97.22759723210952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007337120011136352",
            "extra": "mean: 10.285145663043794 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9040121.1151628,
            "unit": "iter/sec",
            "range": "stddev: 7.857091085925791e-8",
            "extra": "mean: 110.61798700047234 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5201188395278081,
            "unit": "iter/sec",
            "range": "stddev: 0.06758719982249328",
            "extra": "mean: 1.922637528200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58466.00010194306,
            "unit": "iter/sec",
            "range": "stddev: 0.00006157404660700069",
            "extra": "mean: 17.103957826024875 usec\nrounds: 12804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.03368258821382,
            "unit": "iter/sec",
            "range": "stddev: 0.000742249015876847",
            "extra": "mean: 11.760045779066447 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.32018161304786,
            "unit": "iter/sec",
            "range": "stddev: 0.0012474413410978654",
            "extra": "mean: 13.638809642856131 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10350.069640980546,
            "unit": "iter/sec",
            "range": "stddev: 0.000019273437497694614",
            "extra": "mean: 96.61770738629174 usec\nrounds: 5673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1569.5063100661148,
            "unit": "iter/sec",
            "range": "stddev: 0.00016839086471096348",
            "extra": "mean: 637.1430261773688 usec\nrounds: 1146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.499981151829085,
            "unit": "iter/sec",
            "range": "stddev: 0.005043099877043941",
            "extra": "mean: 222.2231529999931 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6113863007519988,
            "unit": "iter/sec",
            "range": "stddev: 0.020336224829771512",
            "extra": "mean: 1.6356270965999897 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 126.4997477126553,
            "unit": "iter/sec",
            "range": "stddev: 0.0004342241370283803",
            "extra": "mean: 7.905154105694378 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 201.0178163141322,
            "unit": "iter/sec",
            "range": "stddev: 0.0005235286363755753",
            "extra": "mean: 4.9746834302353165 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.8701261150829,
            "unit": "iter/sec",
            "range": "stddev: 0.005408187247852962",
            "extra": "mean: 7.641163263804244 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1595578.2449960276,
            "unit": "iter/sec",
            "range": "stddev: 9.416629873670109e-7",
            "extra": "mean: 626.7320346940991 nsec\nrounds: 46297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 74.76783236670639,
            "unit": "iter/sec",
            "range": "stddev: 0.0010742169318390608",
            "extra": "mean: 13.374735743245827 msec\nrounds: 74"
          }
        ]
      }
    ]
  }
}