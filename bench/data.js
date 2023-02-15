window.BENCHMARK_DATA = {
  "lastUpdate": 1676479114219,
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
      }
    ]
  }
}