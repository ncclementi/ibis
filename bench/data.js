window.BENCHMARK_DATA = {
  "lastUpdate": 1676479416651,
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
          "id": "31503337fda8621c78439cf8e99f8e29c5034dbc",
          "message": "feat(duckdb): implement uuid result type",
          "timestamp": "2023-02-15T11:06:11-05:00",
          "tree_id": "efef4c5dfd3b9203808535a95bb17091530c143d",
          "url": "https://github.com/ibis-project/ibis/commit/31503337fda8621c78439cf8e99f8e29c5034dbc"
        },
        "date": 1676479029914,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 271.48973612677344,
            "unit": "iter/sec",
            "range": "stddev: 0.00008110630219337691",
            "extra": "mean: 3.6833805000018316 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.18832199329685,
            "unit": "iter/sec",
            "range": "stddev: 0.00012960896930443026",
            "extra": "mean: 10.73095832836148 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4931.442817772474,
            "unit": "iter/sec",
            "range": "stddev: 0.00010460343308244102",
            "extra": "mean: 202.78041071389703 usec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 624.3824254286347,
            "unit": "iter/sec",
            "range": "stddev: 0.000025137619519832797",
            "extra": "mean: 1.6015825546555158 msec\nrounds: 494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 558445.5670490896,
            "unit": "iter/sec",
            "range": "stddev: 2.6173268973583866e-7",
            "extra": "mean: 1.7906848205173345 usec\nrounds: 21740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5866293783883838,
            "unit": "iter/sec",
            "range": "stddev: 0.00367859835360041",
            "extra": "mean: 1.7046538015999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12038279.017196536,
            "unit": "iter/sec",
            "range": "stddev: 3.7221369835132357e-9",
            "extra": "mean: 83.06835209336896 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 114464.64163562044,
            "unit": "iter/sec",
            "range": "stddev: 3.77915105471905e-7",
            "extra": "mean: 8.736322288793227 usec\nrounds: 31056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.018405777788,
            "unit": "iter/sec",
            "range": "stddev: 0.0006259348091228462",
            "extra": "mean: 6.210470133333956 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 159.53488202383122,
            "unit": "iter/sec",
            "range": "stddev: 0.0006835937318269416",
            "extra": "mean: 6.2682216410240645 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.94946898540488,
            "unit": "iter/sec",
            "range": "stddev: 0.0006324671057026326",
            "extra": "mean: 10.875538608697456 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5590446.628099373,
            "unit": "iter/sec",
            "range": "stddev: 5.5452103480240295e-9",
            "extra": "mean: 178.8765847390229 nsec\nrounds: 55252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 521.9022135309742,
            "unit": "iter/sec",
            "range": "stddev: 0.00004243398998008812",
            "extra": "mean: 1.9160677499993994 msec\nrounds: 400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.075479072670888,
            "unit": "iter/sec",
            "range": "stddev: 0.0007604636361412954",
            "extra": "mean: 39.87959699999806 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5273.438749838788,
            "unit": "iter/sec",
            "range": "stddev: 0.00004714480941997749",
            "extra": "mean: 189.62958468619183 usec\nrounds: 2155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.2514020969375,
            "unit": "iter/sec",
            "range": "stddev: 0.00002067222432239366",
            "extra": "mean: 3.75584876595661 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 148.77565497568997,
            "unit": "iter/sec",
            "range": "stddev: 0.0006192414741898542",
            "extra": "mean: 6.721529810528481 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.05081977205353,
            "unit": "iter/sec",
            "range": "stddev: 0.00009959253994220129",
            "extra": "mean: 8.193308343750871 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.70261023764115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006120502975782725",
            "extra": "mean: 10.672061295452485 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.85166298821795,
            "unit": "iter/sec",
            "range": "stddev: 0.010487783068033643",
            "extra": "mean: 12.368329395348669 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.80973987660741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007382787869668475",
            "extra": "mean: 28.727591862069982 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 322.1122055299671,
            "unit": "iter/sec",
            "range": "stddev: 0.00008459594644627258",
            "extra": "mean: 3.1045082515725 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.7740012871888,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659958295330148",
            "extra": "mean: 6.219911129870502 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.73364404160077,
            "unit": "iter/sec",
            "range": "stddev: 0.009659046203543421",
            "extra": "mean: 7.055487825505186 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6058.3170749222445,
            "unit": "iter/sec",
            "range": "stddev: 0.00005685333440998585",
            "extra": "mean: 165.06234118042335 usec\nrounds: 2931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.570679147982037,
            "unit": "iter/sec",
            "range": "stddev: 0.0002869983255543947",
            "extra": "mean: 73.68827964285784 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 368296.42654351285,
            "unit": "iter/sec",
            "range": "stddev: 1.158640540802021e-7",
            "extra": "mean: 2.715204188607173 usec\nrounds: 1910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1482323.5150642022,
            "unit": "iter/sec",
            "range": "stddev: 1.194520833249645e-7",
            "extra": "mean: 674.6165663820614 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7528849350235056,
            "unit": "iter/sec",
            "range": "stddev: 0.003384440235381818",
            "extra": "mean: 1.3282242126000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 140.35698395306218,
            "unit": "iter/sec",
            "range": "stddev: 0.00016153351043612707",
            "extra": "mean: 7.124689999996135 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1450.3994182923552,
            "unit": "iter/sec",
            "range": "stddev: 0.00001247466897327078",
            "extra": "mean: 689.4652517010533 usec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2684184994310685,
            "unit": "iter/sec",
            "range": "stddev: 0.0018207067333059546",
            "extra": "mean: 440.8357629999955 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.060896144616677,
            "unit": "iter/sec",
            "range": "stddev: 0.0004315784871138706",
            "extra": "mean: 110.36435955555311 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.05965111933228,
            "unit": "iter/sec",
            "range": "stddev: 0.000450956364566372",
            "extra": "mean: 15.858000833332056 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6010.725459201722,
            "unit": "iter/sec",
            "range": "stddev: 0.000048130453278163344",
            "extra": "mean: 166.36926886572672 usec\nrounds: 2213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1496839.268994595,
            "unit": "iter/sec",
            "range": "stddev: 1.1450394821370322e-7",
            "extra": "mean: 668.0744023182165 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.5921252765404,
            "unit": "iter/sec",
            "range": "stddev: 0.0004317925761117222",
            "extra": "mean: 4.574730213793852 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.4325546865806,
            "unit": "iter/sec",
            "range": "stddev: 0.01393825378996593",
            "extra": "mean: 8.894221098040699 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.20804575821814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005191524820419514",
            "extra": "mean: 26.87590760606206 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.874879018317312,
            "unit": "iter/sec",
            "range": "stddev: 0.00576396933026195",
            "extra": "mean: 1.1430151816000091 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15227443395364695,
            "unit": "iter/sec",
            "range": "stddev: 0.10187545573627614",
            "extra": "mean: 6.5670905748 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.20621510528787,
            "unit": "iter/sec",
            "range": "stddev: 0.00022542099208670515",
            "extra": "mean: 4.094899876192163 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.2142552723052,
            "unit": "iter/sec",
            "range": "stddev: 0.00041247801956539415",
            "extra": "mean: 18.11126483673842 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1535804.7958487824,
            "unit": "iter/sec",
            "range": "stddev: 9.438165132491256e-8",
            "extra": "mean: 651.1244154875405 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5101.729449894164,
            "unit": "iter/sec",
            "range": "stddev: 0.00006607804701659191",
            "extra": "mean: 196.01196218289178 usec\nrounds: 2089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.10998984272453,
            "unit": "iter/sec",
            "range": "stddev: 0.00020668757275325029",
            "extra": "mean: 4.164757995512866 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 989.0540703898288,
            "unit": "iter/sec",
            "range": "stddev: 0.000017186097958708183",
            "extra": "mean: 1.0110670689680867 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.62693865585025,
            "unit": "iter/sec",
            "range": "stddev: 0.0006855733101241734",
            "extra": "mean: 10.680686716413485 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.04309661676353,
            "unit": "iter/sec",
            "range": "stddev: 0.00015008788986662177",
            "extra": "mean: 7.040116864658543 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.38572631403807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006668970777307597",
            "extra": "mean: 12.13802493150571 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.2499093289535,
            "unit": "iter/sec",
            "range": "stddev: 0.00013664576020184778",
            "extra": "mean: 7.233277799991811 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57391.15921298145,
            "unit": "iter/sec",
            "range": "stddev: 6.10726255405633e-7",
            "extra": "mean: 17.424286487905746 usec\nrounds: 6461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.63911354465074,
            "unit": "iter/sec",
            "range": "stddev: 0.0001478992799834908",
            "extra": "mean: 9.838732010986039 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9744.451475563596,
            "unit": "iter/sec",
            "range": "stddev: 0.000012974213715493581",
            "extra": "mean: 102.62250291950501 usec\nrounds: 3768"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19248.639665108112,
            "unit": "iter/sec",
            "range": "stddev: 0.000012566453630726181",
            "extra": "mean: 51.95172320736481 usec\nrounds: 6597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4540.74557828662,
            "unit": "iter/sec",
            "range": "stddev: 0.00001870899363631433",
            "extra": "mean: 220.22815036849838 usec\nrounds: 2035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.87980133174374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005962972094186111",
            "extra": "mean: 23.321003571434556 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.0200624578561,
            "unit": "iter/sec",
            "range": "stddev: 0.00007453423540516563",
            "extra": "mean: 11.361046244187783 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5858147646323193,
            "unit": "iter/sec",
            "range": "stddev: 0.0005162516521023827",
            "extra": "mean: 630.590673200004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.83369961761676,
            "unit": "iter/sec",
            "range": "stddev: 0.0006865064953445028",
            "extra": "mean: 6.335782551018553 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.18147478694605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564126136275409",
            "extra": "mean: 10.397012545452483 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10866.51053712943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016630576919128743",
            "extra": "mean: 92.02586208177244 usec\nrounds: 5438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1601494.6518462673,
            "unit": "iter/sec",
            "range": "stddev: 8.638633189306081e-8",
            "extra": "mean: 624.4166965198166 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 220.75846314424746,
            "unit": "iter/sec",
            "range": "stddev: 0.008627802976667834",
            "extra": "mean: 4.529837659481179 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.875331228053707,
            "unit": "iter/sec",
            "range": "stddev: 0.00019846109437996552",
            "extra": "mean: 205.11426879999135 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.73041992919507,
            "unit": "iter/sec",
            "range": "stddev: 0.00010242524891243496",
            "extra": "mean: 13.941086654547647 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6006.777743566672,
            "unit": "iter/sec",
            "range": "stddev: 0.00004855891503062123",
            "extra": "mean: 166.47860844710152 usec\nrounds: 2628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 251.21764017849748,
            "unit": "iter/sec",
            "range": "stddev: 0.00022852430794220377",
            "extra": "mean: 3.980612186665995 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5804.212606642764,
            "unit": "iter/sec",
            "range": "stddev: 0.00005083766345209152",
            "extra": "mean: 172.28865787161675 usec\nrounds: 3373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 414.10161791048574,
            "unit": "iter/sec",
            "range": "stddev: 0.00006720194036339914",
            "extra": "mean: 2.4148661988955693 msec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.720192519669176,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831250694075362",
            "extra": "mean: 23.40813421052776 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4924837.4590908745,
            "unit": "iter/sec",
            "range": "stddev: 5.641570834404946e-9",
            "extra": "mean: 203.0523866638808 nsec\nrounds: 51021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.43633759181387,
            "unit": "iter/sec",
            "range": "stddev: 0.000231970001790753",
            "extra": "mean: 4.0090389782599924 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 247.5283427590444,
            "unit": "iter/sec",
            "range": "stddev: 0.00013096220646118572",
            "extra": "mean: 4.039941401673935 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.41343383734605,
            "unit": "iter/sec",
            "range": "stddev: 0.00022514545950739245",
            "extra": "mean: 4.025547187817431 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8722695771095285,
            "unit": "iter/sec",
            "range": "stddev: 0.0031013221916045977",
            "extra": "mean: 1.1464345728000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 165.37864950881828,
            "unit": "iter/sec",
            "range": "stddev: 0.00019181442689177863",
            "extra": "mean: 6.046729750001243 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10230.322716594668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018207996394214496",
            "extra": "mean: 97.74862706705176 usec\nrounds: 5320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.08298433231285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006885270105044363",
            "extra": "mean: 11.48329960976018 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.13666039507484,
            "unit": "iter/sec",
            "range": "stddev: 0.0001530563253946163",
            "extra": "mean: 14.894991709676406 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 75.92234134361084,
            "unit": "iter/sec",
            "range": "stddev: 0.015959406794293758",
            "extra": "mean: 13.171353547622829 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4397477.987477082,
            "unit": "iter/sec",
            "range": "stddev: 1.2141755073526857e-8",
            "extra": "mean: 227.40307122592796 nsec\nrounds: 188680"
          }
        ]
      },
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
          "id": "ed4b47610cd2a493065caa3431724c29d8d29cf6",
          "message": "refactor(sqlalchemy): set session parameters once per connection",
          "timestamp": "2023-02-15T11:38:30-05:00",
          "tree_id": "f0b092c388c2dec7aa05af4610479bea29c9aef7",
          "url": "https://github.com/ibis-project/ibis/commit/ed4b47610cd2a493065caa3431724c29d8d29cf6"
        },
        "date": 1676479332117,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.07849817010698,
            "unit": "iter/sec",
            "range": "stddev: 0.005090421217811566",
            "extra": "mean: 11.353508753846926 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4854.918690825896,
            "unit": "iter/sec",
            "range": "stddev: 0.00012912163327299028",
            "extra": "mean: 205.97667307789342 usec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.3229092419584,
            "unit": "iter/sec",
            "range": "stddev: 0.00010302740298127846",
            "extra": "mean: 11.195336207547767 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1974586.604732477,
            "unit": "iter/sec",
            "range": "stddev: 2.5794544893494128e-8",
            "extra": "mean: 506.4351179143598 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1444.8759593250713,
            "unit": "iter/sec",
            "range": "stddev: 0.000019849200531998612",
            "extra": "mean: 692.1009333334875 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.35299332658566,
            "unit": "iter/sec",
            "range": "stddev: 0.0001185308026120743",
            "extra": "mean: 9.964824833332386 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 164.6332135051357,
            "unit": "iter/sec",
            "range": "stddev: 0.004072344035258285",
            "extra": "mean: 6.074108490683171 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 247.5813324998061,
            "unit": "iter/sec",
            "range": "stddev: 0.00018869868466799943",
            "extra": "mean: 4.039076734514236 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.3334116198359,
            "unit": "iter/sec",
            "range": "stddev: 0.000031436983892361655",
            "extra": "mean: 3.16122155696213 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5954768277881959,
            "unit": "iter/sec",
            "range": "stddev: 0.0020766956705138002",
            "extra": "mean: 626.7718731999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.13282685731141,
            "unit": "iter/sec",
            "range": "stddev: 0.0005579554671061384",
            "extra": "mean: 10.511618681318994 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1575325.7322785007,
            "unit": "iter/sec",
            "range": "stddev: 7.89274947372168e-8",
            "extra": "mean: 634.789351503598 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4388009.42426605,
            "unit": "iter/sec",
            "range": "stddev: 1.0376882258447419e-8",
            "extra": "mean: 227.89376760940482 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.08712740013065,
            "unit": "iter/sec",
            "range": "stddev: 0.000127798952628184",
            "extra": "mean: 9.70053221212111 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 237.6855602126544,
            "unit": "iter/sec",
            "range": "stddev: 0.00018266307567791154",
            "extra": "mean: 4.207239173912425 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.587298123708107,
            "unit": "iter/sec",
            "range": "stddev: 0.029867823297075467",
            "extra": "mean: 1.7027127443999972 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 972.2572923365667,
            "unit": "iter/sec",
            "range": "stddev: 0.000014928747772384608",
            "extra": "mean: 1.0285343271602119 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.707481508453379,
            "unit": "iter/sec",
            "range": "stddev: 0.0007768008701776057",
            "extra": "mean: 72.95286149999924 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.58053785475812,
            "unit": "iter/sec",
            "range": "stddev: 0.0001882745474724352",
            "extra": "mean: 21.468193499999526 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.2617326586417,
            "unit": "iter/sec",
            "range": "stddev: 0.000492727430609482",
            "extra": "mean: 12.01031936363638 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.02832941439753,
            "unit": "iter/sec",
            "range": "stddev: 0.0008058892544730483",
            "extra": "mean: 28.548321222221194 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5972.38167812943,
            "unit": "iter/sec",
            "range": "stddev: 0.00005207994538115572",
            "extra": "mean: 167.4373899548234 usec\nrounds: 2449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 147.7498854215954,
            "unit": "iter/sec",
            "range": "stddev: 0.006760799018284457",
            "extra": "mean: 6.768194757962487 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.7065264908207,
            "unit": "iter/sec",
            "range": "stddev: 0.00010797417284690302",
            "extra": "mean: 3.6270450784315904 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9881.065729680104,
            "unit": "iter/sec",
            "range": "stddev: 0.000013717213195166107",
            "extra": "mean: 101.20365832566672 usec\nrounds: 4396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.545640320547353,
            "unit": "iter/sec",
            "range": "stddev: 0.00013067463449223843",
            "extra": "mean: 36.3033855217394 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.4029451467592,
            "unit": "iter/sec",
            "range": "stddev: 0.00010561269189012103",
            "extra": "mean: 6.925066514285305 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.98586643176122,
            "unit": "iter/sec",
            "range": "stddev: 0.0003561221066239152",
            "extra": "mean: 4.5251762755098754 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10184.227330362544,
            "unit": "iter/sec",
            "range": "stddev: 0.000001588390391042921",
            "extra": "mean: 98.19105245408944 usec\nrounds: 2669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.55835446647484,
            "unit": "iter/sec",
            "range": "stddev: 0.00011556489659134368",
            "extra": "mean: 6.965808459677837 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.15904713350061,
            "unit": "iter/sec",
            "range": "stddev: 0.00006637208919437048",
            "extra": "mean: 13.668849433962697 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.960479428828894,
            "unit": "iter/sec",
            "range": "stddev: 0.00025636596616989093",
            "extra": "mean: 201.5934173999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6158.412222711834,
            "unit": "iter/sec",
            "range": "stddev: 0.00004431737515030422",
            "extra": "mean: 162.37951664100422 usec\nrounds: 2584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5225.175634412535,
            "unit": "iter/sec",
            "range": "stddev: 0.00004724930902844895",
            "extra": "mean: 191.3811266771762 usec\nrounds: 2534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2806734073760326,
            "unit": "iter/sec",
            "range": "stddev: 0.001252823621193663",
            "extra": "mean: 438.4669881999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 146.16463908732499,
            "unit": "iter/sec",
            "range": "stddev: 0.0005648406783043438",
            "extra": "mean: 6.841600035714229 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 631.7070201132034,
            "unit": "iter/sec",
            "range": "stddev: 0.000011311540408582113",
            "extra": "mean: 1.5830123271715388 msec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.75207656172392,
            "unit": "iter/sec",
            "range": "stddev: 0.0005553418219519285",
            "extra": "mean: 10.553858409093277 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5239.265662095353,
            "unit": "iter/sec",
            "range": "stddev: 0.000049663878605199685",
            "extra": "mean: 190.86644283658396 usec\nrounds: 3455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1996138.5407389044,
            "unit": "iter/sec",
            "range": "stddev: 2.345633847777364e-8",
            "extra": "mean: 500.9672322793556 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7561445482552137,
            "unit": "iter/sec",
            "range": "stddev: 0.002279156547791249",
            "extra": "mean: 1.3224984591999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 139.7933209802894,
            "unit": "iter/sec",
            "range": "stddev: 0.010420344799681073",
            "extra": "mean: 7.153417580951511 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8672050467654017,
            "unit": "iter/sec",
            "range": "stddev: 0.004687041526201943",
            "extra": "mean: 1.1531298205999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.613107122479,
            "unit": "iter/sec",
            "range": "stddev: 0.0006098461873613122",
            "extra": "mean: 6.683906371795099 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.62117279410407,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703490255921744",
            "extra": "mean: 11.283985175002442 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5850.694043660463,
            "unit": "iter/sec",
            "range": "stddev: 0.000049372724710886206",
            "extra": "mean: 170.91989301398405 usec\nrounds: 3421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.83981123561554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006068568207530779",
            "extra": "mean: 11.13092276404479 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 251.9583688814443,
            "unit": "iter/sec",
            "range": "stddev: 0.00016737785244527595",
            "extra": "mean: 3.96890964344406 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.12087066958063,
            "unit": "iter/sec",
            "range": "stddev: 0.00006393568881925545",
            "extra": "mean: 14.898495654544645 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.52745815375073,
            "unit": "iter/sec",
            "range": "stddev: 0.00004766098289403356",
            "extra": "mean: 8.228593070175531 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1560969.298916073,
            "unit": "iter/sec",
            "range": "stddev: 1.6141532660638394e-7",
            "extra": "mean: 640.6275899816823 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4498599.553072011,
            "unit": "iter/sec",
            "range": "stddev: 9.500421060734288e-9",
            "extra": "mean: 222.2914016251173 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.5360552183282,
            "unit": "iter/sec",
            "range": "stddev: 0.00014236109307170727",
            "extra": "mean: 2.4181688328773303 msec\nrounds: 365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5516237.508136406,
            "unit": "iter/sec",
            "range": "stddev: 4.304033110492097e-9",
            "extra": "mean: 181.28298473829057 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.00352366212667,
            "unit": "iter/sec",
            "range": "stddev: 0.00018672175712690324",
            "extra": "mean: 4.048525240343894 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 258.40621286368133,
            "unit": "iter/sec",
            "range": "stddev: 0.000018007679970071618",
            "extra": "mean: 3.8698759945355348 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.63844109946893,
            "unit": "iter/sec",
            "range": "stddev: 0.00020680474013012575",
            "extra": "mean: 3.9898109628089244 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.0414210764492,
            "unit": "iter/sec",
            "range": "stddev: 0.000058353629401890004",
            "extra": "mean: 6.99098200000086 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55779.54294705502,
            "unit": "iter/sec",
            "range": "stddev: 5.247742412203097e-7",
            "extra": "mean: 17.927719503710932 usec\nrounds: 13141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 511.9816779892587,
            "unit": "iter/sec",
            "range": "stddev: 0.00001638663336080334",
            "extra": "mean: 1.953194895425496 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.66945009196968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006184424422839985",
            "extra": "mean: 6.262938836602741 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 577429.7203768339,
            "unit": "iter/sec",
            "range": "stddev: 3.5607544955831245e-7",
            "extra": "mean: 1.731812486803406 usec\nrounds: 23641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.8574498837523,
            "unit": "iter/sec",
            "range": "stddev: 0.0006596431499569313",
            "extra": "mean: 6.178276012121842 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12044064.043134838,
            "unit": "iter/sec",
            "range": "stddev: 2.7456480139945134e-9",
            "extra": "mean: 83.02845255697036 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.05346621946527,
            "unit": "iter/sec",
            "range": "stddev: 0.000144116430632463",
            "extra": "mean: 17.52741886274429 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.68107250030315,
            "unit": "iter/sec",
            "range": "stddev: 0.000022576219923692893",
            "extra": "mean: 10.451387864583475 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4487.716807775875,
            "unit": "iter/sec",
            "range": "stddev: 0.00005951454773311053",
            "extra": "mean: 222.83045986041236 usec\nrounds: 2155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.51723455872093,
            "unit": "iter/sec",
            "range": "stddev: 0.00020016619977363125",
            "extra": "mean: 4.040122708153319 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 240.1636804871761,
            "unit": "iter/sec",
            "range": "stddev: 0.00021700781564832077",
            "extra": "mean: 4.1638269282494464 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.55078389386233,
            "unit": "iter/sec",
            "range": "stddev: 0.010465441869764024",
            "extra": "mean: 7.01504385093077 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.189218474482935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751666881494822",
            "extra": "mean: 108.82318260000545 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8676790559050761,
            "unit": "iter/sec",
            "range": "stddev: 0.0027642555764381335",
            "extra": "mean: 1.1524998709999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.94557934310439,
            "unit": "iter/sec",
            "range": "stddev: 0.000226804189956881",
            "extra": "mean: 22.755417380950114 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 110354.46233749592,
            "unit": "iter/sec",
            "range": "stddev: 3.1437669796669374e-7",
            "extra": "mean: 9.061708777500183 usec\nrounds: 38462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6105.774571767708,
            "unit": "iter/sec",
            "range": "stddev: 0.00004526454916332286",
            "extra": "mean: 163.7793842936599 usec\nrounds: 2152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19741.644602120447,
            "unit": "iter/sec",
            "range": "stddev: 0.000011976031906781366",
            "extra": "mean: 50.6543411227548 usec\nrounds: 7018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 397246.231552888,
            "unit": "iter/sec",
            "range": "stddev: 3.45997728824524e-7",
            "extra": "mean: 2.517330362306693 usec\nrounds: 1907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15384431268948978,
            "unit": "iter/sec",
            "range": "stddev: 0.064234117227324",
            "extra": "mean: 6.500077789800008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.11260495126947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000828935963172942",
            "extra": "mean: 14.469140625000154 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10764.746461514174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014614574227665562",
            "extra": "mean: 92.89582467874858 usec\nrounds: 5989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.959846984894234,
            "unit": "iter/sec",
            "range": "stddev: 0.0005426601565961083",
            "extra": "mean: 26.34362568421155 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.33786909270259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005727180315438448",
            "extra": "mean: 11.069554883720178 msec\nrounds: 86"
          }
        ]
      }
    ]
  }
}