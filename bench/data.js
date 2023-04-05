window.BENCHMARK_DATA = {
  "lastUpdate": 1680718569098,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "e12c4df0436a7e8f13f8e63d0af1e7a780012ca6",
          "message": "fix(api): disambiguate attribute errors from a missing `resolve` method\n\nPreviously we caught `AttributeError`s to consider values that aren't\n`Deferred` instances as resolved.\n\nHowever, we caught the `AttributeError` during resolution of the\n`resolve` attribute _and_ resolution of the deferred value against an\nobject.\n\nThis commit scopes that to only the `resolve` attribute, other errors\nare bubbled up as usual.",
          "timestamp": "2023-04-05T18:11:11Z",
          "tree_id": "8d2b2c5281c54be8e5ecea574eb4c285a75ff01e",
          "url": "https://github.com/ibis-project/ibis/commit/e12c4df0436a7e8f13f8e63d0af1e7a780012ca6"
        },
        "date": 1680718490846,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6832552948857078,
            "unit": "iter/sec",
            "range": "stddev: 0.029513837206387804",
            "extra": "mean: 1.463581779000009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.4154020366427,
            "unit": "iter/sec",
            "range": "stddev: 0.000023405012685185676",
            "extra": "mean: 1.8301094666671562 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2115.259208747142,
            "unit": "iter/sec",
            "range": "stddev: 0.00014496305318727117",
            "extra": "mean: 472.75529914477727 usec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1817870.859111521,
            "unit": "iter/sec",
            "range": "stddev: 8.39952640714152e-8",
            "extra": "mean: 550.0940812092379 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2040.010786688399,
            "unit": "iter/sec",
            "range": "stddev: 0.00024794426801550085",
            "extra": "mean: 490.1934864880422 usec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1993392.158952735,
            "unit": "iter/sec",
            "range": "stddev: 8.709380408994733e-8",
            "extra": "mean: 501.65743629962327 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.04318117367417,
            "unit": "iter/sec",
            "range": "stddev: 0.008736937229779515",
            "extra": "mean: 11.230506219780617 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8777101831905575,
            "unit": "iter/sec",
            "range": "stddev: 0.006592031573731398",
            "extra": "mean: 1.1393282420000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.43887038249892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005711762455504982",
            "extra": "mean: 10.158588737501262 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8787773040025558,
            "unit": "iter/sec",
            "range": "stddev: 0.011324840978798913",
            "extra": "mean: 1.137944727799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1907.021566928414,
            "unit": "iter/sec",
            "range": "stddev: 0.003098360446435424",
            "extra": "mean: 524.3779186045975 usec\nrounds: 1548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 257.4083883622906,
            "unit": "iter/sec",
            "range": "stddev: 0.0003843034064558128",
            "extra": "mean: 3.8848772814370967 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.308542977221,
            "unit": "iter/sec",
            "range": "stddev: 0.00004537105674747146",
            "extra": "mean: 1.4720851229358565 msec\nrounds: 545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.460182387711335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231176568794674",
            "extra": "mean: 22.49203548648503 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.66923339129798,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746126300528552",
            "extra": "mean: 10.344552914288638 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.229396330856968,
            "unit": "iter/sec",
            "range": "stddev: 0.00044891381113067863",
            "extra": "mean: 39.636303100004966 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.68758993139511,
            "unit": "iter/sec",
            "range": "stddev: 0.0007658934793889586",
            "extra": "mean: 9.834041702381414 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 338.97726628505325,
            "unit": "iter/sec",
            "range": "stddev: 0.00001618113152767252",
            "extra": "mean: 2.950050341013366 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.3756369795584,
            "unit": "iter/sec",
            "range": "stddev: 0.000225122958520317",
            "extra": "mean: 3.631403311376568 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.47253398443327,
            "unit": "iter/sec",
            "range": "stddev: 0.00018168023906194766",
            "extra": "mean: 18.701189666663566 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11957.867809541844,
            "unit": "iter/sec",
            "range": "stddev: 0.000022260004644967977",
            "extra": "mean: 83.62694887813066 usec\nrounds: 4636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.38085714585678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006414926903607433",
            "extra": "mean: 9.962058787234364 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.57040644384088,
            "unit": "iter/sec",
            "range": "stddev: 0.00040750099384897576",
            "extra": "mean: 4.006885328469516 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.54929665326188,
            "unit": "iter/sec",
            "range": "stddev: 0.00007640784338178394",
            "extra": "mean: 6.114364417720996 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.554154697688842,
            "unit": "iter/sec",
            "range": "stddev: 0.0001048138335823297",
            "extra": "mean: 64.29150406666508 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2214.831724120287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000805536638191292",
            "extra": "mean: 451.5015696721572 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2195.6915094684946,
            "unit": "iter/sec",
            "range": "stddev: 0.00008175946716475693",
            "extra": "mean: 455.4373853010287 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2018771.1911939369,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010918939370593954",
            "extra": "mean: 495.35083736190154 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 168.30282760429182,
            "unit": "iter/sec",
            "range": "stddev: 0.00004606416701042146",
            "extra": "mean: 5.941670821783029 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.70902911440821,
            "unit": "iter/sec",
            "range": "stddev: 0.02697723109637602",
            "extra": "mean: 26.51884770000379 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2014637.3223113895,
            "unit": "iter/sec",
            "range": "stddev: 1.9395861370474602e-7",
            "extra": "mean: 496.3672562427773 nsec\nrounds: 144907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.53518569141055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007433708160656551",
            "extra": "mean: 9.84880259183488 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8392.608614139699,
            "unit": "iter/sec",
            "range": "stddev: 0.00002872783047533172",
            "extra": "mean: 119.15246450492401 usec\nrounds: 4564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.65270954607954,
            "unit": "iter/sec",
            "range": "stddev: 0.000100915294889919",
            "extra": "mean: 6.148068500000609 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.32886232122523,
            "unit": "iter/sec",
            "range": "stddev: 0.01863425670651108",
            "extra": "mean: 12.295757882979997 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11775908.798572648,
            "unit": "iter/sec",
            "range": "stddev: 3.6851331848166324e-9",
            "extra": "mean: 84.91913593292854 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.28434696886339,
            "unit": "iter/sec",
            "range": "stddev: 0.0007444100554280313",
            "extra": "mean: 11.327036267852618 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12611.106896576011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016858636938705753",
            "extra": "mean: 79.29518068485373 usec\nrounds: 6979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.51956971482808,
            "unit": "iter/sec",
            "range": "stddev: 0.0008458459965591961",
            "extra": "mean: 9.948311585863124 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1160.6699973111054,
            "unit": "iter/sec",
            "range": "stddev: 0.000008909499666717824",
            "extra": "mean: 861.5713357945622 usec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7936965459732397,
            "unit": "iter/sec",
            "range": "stddev: 0.007704758701107517",
            "extra": "mean: 1.2599273677999805 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.19620032790793,
            "unit": "iter/sec",
            "range": "stddev: 0.0007051834964741277",
            "extra": "mean: 10.28846803297176 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145635.7490261291,
            "unit": "iter/sec",
            "range": "stddev: 3.103698384428489e-7",
            "extra": "mean: 6.866445956346788 usec\nrounds: 39681"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.5318148488348,
            "unit": "iter/sec",
            "range": "stddev: 0.00030961008882104046",
            "extra": "mean: 3.6162204357811296 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 244.14487099764267,
            "unit": "iter/sec",
            "range": "stddev: 0.0038949468094868346",
            "extra": "mean: 4.095928765219301 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.5620202301785,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508413437667224",
            "extra": "mean: 3.6158254816323465 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71733.2482975194,
            "unit": "iter/sec",
            "range": "stddev: 0.000006943366820767899",
            "extra": "mean: 13.940536971815634 usec\nrounds: 13889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.62015436997785,
            "unit": "iter/sec",
            "range": "stddev: 0.00027453065373083904",
            "extra": "mean: 3.750654193277305 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13862.928092390923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018147133448443386",
            "extra": "mean: 72.13483279545247 usec\nrounds: 7446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 169.522858116729,
            "unit": "iter/sec",
            "range": "stddev: 0.003802551118784116",
            "extra": "mean: 5.8989095105476945 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.30019895907127,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980850597282859",
            "extra": "mean: 16.31316075609603 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.474558759402544,
            "unit": "iter/sec",
            "range": "stddev: 0.00024478744139450086",
            "extra": "mean: 95.46941527272875 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.14201031505604,
            "unit": "iter/sec",
            "range": "stddev: 0.00006692577614679287",
            "extra": "mean: 8.254774684680266 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.8884853935443,
            "unit": "iter/sec",
            "range": "stddev: 0.00008936966095756383",
            "extra": "mean: 10.32114390000187 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.0828041241833,
            "unit": "iter/sec",
            "range": "stddev: 0.0007428159935210063",
            "extra": "mean: 10.300485333333096 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.83689955203224,
            "unit": "iter/sec",
            "range": "stddev: 0.0006921540316559222",
            "extra": "mean: 9.9170046326543 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.48857444947177,
            "unit": "iter/sec",
            "range": "stddev: 0.00008952240793092733",
            "extra": "mean: 13.424877672727316 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.509627940395034,
            "unit": "iter/sec",
            "range": "stddev: 0.002027863923578011",
            "extra": "mean: 398.4654393999904 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2162.262765683329,
            "unit": "iter/sec",
            "range": "stddev: 0.00008077575007137514",
            "extra": "mean: 462.4784812792978 usec\nrounds: 1282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6564750015773875,
            "unit": "iter/sec",
            "range": "stddev: 0.0025722279427245875",
            "extra": "mean: 603.6915733999876 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7066517.764170236,
            "unit": "iter/sec",
            "range": "stddev: 3.78445334655591e-9",
            "extra": "mean: 141.51241578568363 nsec\nrounds: 59877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16925258410363603,
            "unit": "iter/sec",
            "range": "stddev: 0.08035390205406734",
            "extra": "mean: 5.908329289599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.7831983487472,
            "unit": "iter/sec",
            "range": "stddev: 0.0007988153020811",
            "extra": "mean: 9.922288797976321 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.33907004229334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008607009579764825",
            "extra": "mean: 9.966207575757835 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.49528961063655,
            "unit": "iter/sec",
            "range": "stddev: 0.000028732613710719643",
            "extra": "mean: 5.11521276032623 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.7548669724324,
            "unit": "iter/sec",
            "range": "stddev: 0.000004835401335783021",
            "extra": "mean: 561.5596051691043 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 266.8957342299117,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998242170600804",
            "extra": "mean: 3.7467815020923907 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.89725790939102,
            "unit": "iter/sec",
            "range": "stddev: 0.00006286535225955475",
            "extra": "mean: 7.251775815999736 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 294.7846437082905,
            "unit": "iter/sec",
            "range": "stddev: 0.00010356285057549869",
            "extra": "mean: 3.392306964909502 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6148808.800361725,
            "unit": "iter/sec",
            "range": "stddev: 8.389919329615433e-9",
            "extra": "mean: 162.63312658850555 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 502995.9710641808,
            "unit": "iter/sec",
            "range": "stddev: 1.618731283376408e-7",
            "extra": "mean: 1.9880874947851281 usec\nrounds: 2103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.847947301129345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005206258783577271",
            "extra": "mean: 22.29756455263268 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.56457519701199,
            "unit": "iter/sec",
            "range": "stddev: 0.00012151803938859494",
            "extra": "mean: 9.845952666667774 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5476086.691582929,
            "unit": "iter/sec",
            "range": "stddev: 8.960647713950489e-9",
            "extra": "mean: 182.61215651267537 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.51835152708532,
            "unit": "iter/sec",
            "range": "stddev: 0.00047024848916873925",
            "extra": "mean: 17.088656359999277 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.62304241956735,
            "unit": "iter/sec",
            "range": "stddev: 0.00030265273040167777",
            "extra": "mean: 3.602006487951082 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.62695087554872,
            "unit": "iter/sec",
            "range": "stddev: 0.0007304323656445347",
            "extra": "mean: 10.243073157890219 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.18835608460893,
            "unit": "iter/sec",
            "range": "stddev: 0.0008607276410349007",
            "extra": "mean: 10.289298433337358 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5475.88957985493,
            "unit": "iter/sec",
            "range": "stddev: 0.000026651599472547523",
            "extra": "mean: 182.61872987338296 usec\nrounds: 2447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.63894713041489,
            "unit": "iter/sec",
            "range": "stddev: 0.00009110600491788879",
            "extra": "mean: 177.33806983333503 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2118.4422668479615,
            "unit": "iter/sec",
            "range": "stddev: 0.00008632750619466067",
            "extra": "mean: 472.0449623052055 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.73862985652346,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863891509113775",
            "extra": "mean: 3.463339839552844 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.973707187931,
            "unit": "iter/sec",
            "range": "stddev: 0.000011775840662128175",
            "extra": "mean: 1.3227973281237482 msec\nrounds: 640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2185.179792713329,
            "unit": "iter/sec",
            "range": "stddev: 0.00008002536292307907",
            "extra": "mean: 457.62824795222184 usec\nrounds: 1343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.00885351210933,
            "unit": "iter/sec",
            "range": "stddev: 0.00016007204916064014",
            "extra": "mean: 9.008290495414546 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.27128503871381,
            "unit": "iter/sec",
            "range": "stddev: 0.00024795113301258516",
            "extra": "mean: 9.87446737362641 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.15762638276163,
            "unit": "iter/sec",
            "range": "stddev: 0.0006817592129373803",
            "extra": "mean: 21.66489220454082 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 796710.1955029529,
            "unit": "iter/sec",
            "range": "stddev: 1.1512323533039557e-7",
            "extra": "mean: 1.2551615451195686 usec\nrounds: 25188"
          }
        ]
      }
    ]
  }
}